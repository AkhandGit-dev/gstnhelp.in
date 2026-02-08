import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // Extract IP address
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    if (Array.isArray(ip)) ip = ip[0];
    if (typeof ip === 'string' && ip.includes(',')) ip = ip.split(',')[0].trim();

    // Cast prisma to any to avoid TS errors before you run the migration
    const db = prisma as any;

    // Check if Visitor model is available (runtime check)
    if (!db.visitor) {
      console.warn('Visitor model not found in Prisma client. Please add the Visitor model to schema.prisma and run `npx prisma migrate dev`.');
      return res.status(200).json({ count: 0 });
    }

    // Upsert the visitor (record if new, update time if exists)
    await db.visitor.upsert({
      where: { ip },
      update: { lastSeen: new Date() },
      create: { ip, lastSeen: new Date() },
    });

    // Get total count
    const count = await db.visitor.count();
    
    return res.status(200).json({ count });
  } catch (error) {
    console.error('Visitor API Error:', error);
    return res.status(200).json({ count: 0 });
  }
}