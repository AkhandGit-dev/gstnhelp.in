import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || 'admin@gstnhelp.in';
  const password = process.env.ADMIN_PASSWORD || 'Admin@123';
  const hashed = await bcrypt.hash(password, 10);
  const existing = await prisma.admin.findUnique({ where: { email } });
  if (!existing) {
    await prisma.admin.create({ data: { email, password: hashed, name: 'GSTN Help Admin' } });
    console.log('Admin created:', email);
  } else {
    console.log('Admin already exists:', email);
  }
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());