import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { prisma } from '../../../lib/prisma';
import { sendAdminNotification, sendUserThankYouEmail } from '../../../lib/mailer';

export const config = {
  api: { bodyParser: false }
};

const UPLOAD_DIR = process.env.UPLOAD_DIR || './public/uploads';

// Helper to extract single value from Formidable v3 fields (which are arrays)
const getSingleValue = (val: string | string[] | undefined): string => {
  if (Array.isArray(val)) return val[0] || '';
  return val || '';
};

async function verifyRecaptcha(token: string | undefined) {
  const secret = process.env.RECAPTCHA_SECRET;
  console.log('[reCAPTCHA] Secret configured:', !!secret); // Debug log

  if (!secret) return true; // if not configured, skip verification

  console.log('[reCAPTCHA] Token received:', token ? 'Yes (length: ' + token.length + ')' : 'No'); // Debug log

  if (!token) return false; // Fail if secret exists but token doesn't

  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`
  });
  const data = await res.json();
  console.log('[reCAPTCHA] Google response:', data); // Debug log
  return data.success;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const form = formidable({ multiples: true, uploadDir: UPLOAD_DIR, keepExtensions: true });

    if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

    form.parse(req, async (err: any, fields: Record<string, any>, files: Record<string, any>) => {
      if (err) return res.status(500).json({ message: 'File upload error' });

      console.log('[reCAPTCHA] Incoming fields:', Object.keys(fields)); // Debug log

      const caseType = getSingleValue(fields.caseType);

      // Only verify reCAPTCHA if it is NOT a Chat Inquiry
      if (caseType !== 'Chat Inquiry') {
        const recaptchaToken = getSingleValue(fields['g-recaptcha-response']) || getSingleValue(fields['token']) || getSingleValue(fields['recaptchaToken']);
        const recaptchaOk = await verifyRecaptcha(recaptchaToken);
        if (!recaptchaOk) return res.status(400).json({ message: 'reCAPTCHA verification failed' });
      }

      const phone = getSingleValue(fields.phone);
      const name = getSingleValue(fields.name);

      if (!phone || !name || !caseType) return res.status(400).json({ message: 'Missing required fields' });

      // collect file paths with validation
      const allowed = ['application/pdf','image/png','image/jpeg','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const MAX_BYTES = 8 * 1024 * 1024; // 8MB
      const docPaths: string[] = [];
      if (files.files) {
        const rawFiles = files.files;
        const fileArr = Array.isArray(rawFiles) ? rawFiles : [rawFiles];
        for (const f of fileArr) {
          if (f.size > MAX_BYTES) {
            return res.status(400).json({ message: 'One of the files exceeds 8MB limit' });
          }
          // Formidable v3 uses 'mimetype' and 'filepath'
          const fileType = f.mimetype || f.type;
          if (fileType && !allowed.includes(fileType)) {
            return res.status(400).json({ message: 'Unsupported file type: ' + fileType });
          }
          
          const p = f.filepath || f.path;
          if (p) {
            const filename = path.basename(p);
            docPaths.push('/uploads/' + filename);
          }
        }
      }

      try {
        const lead = await prisma.lead.create({ data: {
          name,
          email: getSingleValue(fields.email) || null,
          phone,
          gstin: getSingleValue(fields.gstin) || null,
          caseType,
          refNumber: getSingleValue(fields.refNumber) || null,
          amount: fields.amount ? Number(getSingleValue(fields.amount)) : null,
          description: getSingleValue(fields.description) || null,
          supportDocs: docPaths
        }});

        // send notifications (async)
        sendAdminNotification(lead).catch(console.error);
        sendUserThankYouEmail(lead).catch(console.error);

        return res.status(201).json({ id: lead.id });
      } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Database error' });
      }
    });

  } else if (req.method === 'GET') {
    // Admin list — protected by Bearer token
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ message: 'Unauthorized' });
    const token = auth.split(' ')[1];
    // simple token verification using JWT utility (import here to avoid circular deps)
    try {
      const jwt = require('jsonwebtoken');
      const secret = process.env.JWT_SECRET || 'dev-secret-change-me';
      const payload = jwt.verify(token, secret);
      // payload check minimal
    } catch (e) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const { caseType, start, end } = req.query;
    const where: any = {};
    if (caseType) where.caseType = String(caseType);
    if (start || end) where.createdAt = {};
    if (start) where.createdAt.gte = new Date(String(start));
    if (end) where.createdAt.lte = new Date(String(end));

    const leads = await prisma.lead.findMany({ where, orderBy: { createdAt: 'desc' } });
    return res.json(leads);
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}