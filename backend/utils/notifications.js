const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 1025),
  auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined
});

async function sendStatusEmail(to, subject, text) {
  if (!to) return;
  try {
    await transporter.sendMail({ from: 'no-reply@chrishani.gov.za', to, subject, text });
  } catch (error) {
    console.warn('Email send skipped/failed:', error.message);
  }
}

module.exports = { sendStatusEmail };
