import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

async function verifyAuth(req: NextApiRequest) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return false;
  const token = auth.split(' ')[1];
  try {
    const jwt = require('jsonwebtoken');
    const secret = process.env.JWT_SECRET || 'dev-secret-change-me';
    jwt.verify(token, secret);
    return true;
  } catch (e) {
    return false;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id) return res.status(400).json({ message: 'Missing id' });

  if (!(await verifyAuth(req))) return res.status(401).json({ message: 'Unauthorized' });

  if (req.method === 'PUT') {
    const { status } = req.body;
    if (!status) return res.status(400).json({ message: 'Missing status' });
    const updated = await prisma.lead.update({ where: { id: Number(id) }, data: { status } });
    return res.json(updated);
  } else if (req.method === 'DELETE') {
    await prisma.lead.delete({ where: { id: Number(id) } });
    return res.status(204).end();
  } else if (req.method === 'GET') {
    const lead = await prisma.lead.findUnique({ where: { id: Number(id) } });
    if (!lead) return res.status(404).json({ message: 'Not found' });
    return res.json(lead);
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end();
  }
}