import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '';
const FROM_EMAIL = process.env.FROM_EMAIL || 'no-reply@gstnhelp.in';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@gstnhelp.in';

sgMail.setApiKey(SENDGRID_API_KEY);

export async function sendAdminNotification(lead: any) {
  const msg = {
    to: ADMIN_EMAIL,
    from: FROM_EMAIL,
    subject: `New GSTN Help lead: ${lead.caseType} — ${lead.name}`,
    html: `<p>New lead submitted</p><pre>${JSON.stringify(lead, null, 2)}</pre>`
  };
  return sgMail.send(msg);
}

export async function sendUserThankYouEmail(lead: any) {
  if (!lead.email) return;
  const msg = {
    to: lead.email,
    from: FROM_EMAIL,
    subject: `GSTN Help — We received your case`,
    html: `<p>Dear ${lead.name},</p><p>Thank you for submitting your case. Reference: ${lead.id}</p>`
  };
  return sgMail.send(msg);
}