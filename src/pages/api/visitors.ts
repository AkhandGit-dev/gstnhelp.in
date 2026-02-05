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

    const visitorIp = typeof ip === 'string' ? ip : 'unknown';

    // Upsert the visitor (record if new, update time if exists)
    await prisma.visitor.upsert({
      where: { ip: visitorIp },
      update: { lastSeen: new Date() },
      create: { ip: visitorIp, lastSeen: new Date() },
    });

    // Get total count
    const count = await prisma.visitor.count();
    
    return res.status(200).json({ count });
  } catch (error) {
    console.error('Visitor API Error:', error);
    return res.status(200).json({ count: 0 });
  }
}