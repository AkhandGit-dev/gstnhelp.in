# GSTN Help — Complex GST Services Platform

Professional lead-capture app for complex GST notices, refunds, ITC reconciliation, audits and appeals.

## Quick start ✅

1. Copy `.env.example` to `.env` and fill in values (DATABASE_URL, SENDGRID_API_KEY, JWT_SECRET, RECAPTCHA_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD).
2. Install dependencies: `npm install`
3. Run database migration: `npx prisma migrate dev --name init`
4. Seed admin user: `npm run seed`
5. Start dev server: `npm run dev`

## Features 🔧
- Next.js + Tailwind CSS frontend (responsive)
- Prisma + PostgreSQL DB models
- Lead capture form with file uploads (multipart)
- Admin dashboard (**Login required**) to manage leads
- Email notifications via SendGrid (admin & user)
- Google reCAPTCHA support (optional)
- Basic tests with Jest and simple UI tests with Cypress

## Project Structure

- `src/components` — shared UI components (Header, Footer, LeadForm)
- `src/pages` — Next.js pages & API routes
- `src/lib` — helpers (prisma client, mailer, auth)
- `prisma/schema.prisma` — database schema
- `database/seed.ts` — create admin user

## Environment variables

See `.env.example` for all required values. Important ones:
- `DATABASE_URL` — PostgreSQL connection string
- `SENDGRID_API_KEY` — SendGrid API key for email
- `JWT_SECRET` — secret for admin tokens
- `RECAPTCHA_SECRET` / `RECAPTCHA_SITE_KEY` — Google reCAPTCHA (optional)
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` — initial admin user used by seed script

## Tests

- Unit tests: `npm test`
- Cypress: `npx cypress open` (configure baseUrl as `http://localhost:3000`)

## Deployment

- Frontend: Deploy using Vercel (connected to your GitHub repo). Set environment variables in Vercel dashboard.
- Backend + DB: Use Railway, Render, or Supabase for the PostgreSQL database. Ensure `DATABASE_URL` is set.
- File uploads: For production use S3-compatible storage; replace local upload logic with S3 SDK.

## Admin panel setup

1. Seed admin with `npm run seed` or create a user in the `admin` table.
2. Visit `/admin/login` and enter admin credentials.

## Security & Compliance

- Validate inputs server-side and client-side
- Validate file types and size
- Use reCAPTCHA to reduce spam
- Privacy policy and Terms pages included

---

For more details, see the in-repo docs and code comments. If you want, I can add CI workflows, S3 upload integration, and a more advanced Admin UI.