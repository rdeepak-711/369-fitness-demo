import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const adminPassword = process.env.ADMIN_PASSWORD || '';

app.use(cors());
app.use(express.json());
function requireAdmin(req, res, next) {
  if (!adminPassword) return res.status(500).json({ message: 'ADMIN_PASSWORD not set' });
  const key = req.header('x-admin-key');
  if (key !== adminPassword) return res.status(401).json({ message: 'Unauthorized' });
  next();
}


const dataDir = path.join(__dirname, 'data');
const bookingsFile = path.join(dataDir, 'bookings.json');

function ensureDataFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(bookingsFile)) {
    fs.writeFileSync(bookingsFile, JSON.stringify([] , null, 2));
  }
}

ensureDataFile();

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/bookings', requireAdmin, (_req, res) => {
  ensureDataFile();
  const raw = fs.readFileSync(bookingsFile, 'utf-8');
  res.json(JSON.parse(raw));
});
app.patch('/api/bookings/:id', requireAdmin, (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body || {};
    ensureDataFile();
    const raw = fs.readFileSync(bookingsFile, 'utf-8');
    const bookings = JSON.parse(raw);
    const idx = bookings.findIndex(b => String(b.id) === String(id));
    if (idx === -1) return res.status(404).json({ message: 'Not found' });
    if (status) bookings[idx].status = status;
    fs.writeFileSync(bookingsFile, JSON.stringify(bookings, null, 2));
    res.json({ ok: true, booking: bookings[idx] });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/bookings.csv', requireAdmin, (_req, res) => {
  ensureDataFile();
  const raw = fs.readFileSync(bookingsFile, 'utf-8');
  const bookings = JSON.parse(raw);
  const headers = ['id','name','email','phone','preferredTime','message','status','createdAt'];
  const lines = [headers.join(',')].concat(
    bookings.map(b => headers.map(h => `"${String(b[h] ?? '').replace(/"/g,'""')}"`).join(','))
  );
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="bookings.csv"');
  res.send(lines.join('\n'));
});

app.post('/api/bookings', async (req, res) => {
  try {
    const { name, email, phone, preferredTime, message } = req.body || {};

    // Basic server-side validation
    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    ensureDataFile();
    const raw = fs.readFileSync(bookingsFile, 'utf-8');
    const bookings = JSON.parse(raw);
    const newBooking = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      preferredTime: preferredTime || null,
      message: message || '',
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    bookings.push(newBooking);
    fs.writeFileSync(bookingsFile, JSON.stringify(bookings, null, 2));

    // Send notification emails if SMTP configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const toEmail = process.env.NOTIFY_TO || process.env.SMTP_USER;
    const fromEmail = process.env.FROM_EMAIL || smtpUser;

    if (smtpHost && smtpUser && smtpPass && toEmail && fromEmail) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
        logger: true,
        debug: true,
      });

      try {
        await transporter.verify();
        console.log('[mail] SMTP connection verified');
      } catch (e) {
        console.error('[mail] SMTP verify failed:', e?.message || e);
      }

      const adminMsg = {
        from: fromEmail,
        to: toEmail,
        subject: `New Free Trial Booking - ${name}`,
        text: `New booking received.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred Time: ${preferredTime || 'N/A'}\nMessage: ${message || '-'}\nSubmitted: ${newBooking.createdAt}`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
            <h2 style="margin:0 0 12px 0;color:#D72638;">New Free Trial Booking</h2>
            <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
              <tr><td><strong>Name</strong></td><td>${name}</td></tr>
              <tr><td><strong>Email</strong></td><td>${email}</td></tr>
              <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
              <tr><td><strong>Preferred Time</strong></td><td>${preferredTime || 'N/A'}</td></tr>
              <tr><td valign="top"><strong>Message</strong></td><td>${(message || '-').replace(/\n/g,'<br/>')}</td></tr>
              <tr><td><strong>Submitted</strong></td><td>${newBooking.createdAt}</td></tr>
            </table>
          </div>
        `,
      };

      const userMsg = {
        from: fromEmail,
        to: email,
        subject: '369 Fitness Wellness - Free Trial Request Received',
        text: `Hi ${name},\n\nThanks for booking a free trial at 369 Fitness Wellness. Our team will contact you soon.\n\nYour details:\nPhone: ${phone}\nPreferred Time: ${preferredTime || 'N/A'}\nMessage: ${message || '-'}\n\nRegards,\n369 Fitness Wellness`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
            <h2 style="margin:0 0 12px 0;color:#D72638;">Free Trial Request Received</h2>
            <p>Hi ${name},</p>
            <p>Thanks for booking a free trial at <strong>369 Fitness Wellness</strong>. Our team will contact you soon.</p>
            <p><strong>Your details</strong></p>
            <ul>
              <li>Phone: ${phone}</li>
              <li>Preferred Time: ${preferredTime || 'N/A'}</li>
              <li>Message: ${(message || '-').replace(/\n/g,'<br/>')}</li>
            </ul>
            <p>See you soon!</p>
          </div>
        `,
      };

      try {
        const infoAdmin = await transporter.sendMail(adminMsg);
        console.log('[mail] admin sent:', infoAdmin?.messageId);
      } catch (e) {
        console.error('[mail] admin send failed:', e?.message || e);
      }
      try {
        const infoUser = await transporter.sendMail(userMsg);
        console.log('[mail] user sent:', infoUser?.messageId);
      } catch (e) {
        console.error('[mail] user send failed:', e?.message || e);
      }
    } else {
      console.warn('[mail] SMTP env incomplete; skipping emails');
    }

    res.status(201).json({ message: 'Booking received', booking: newBooking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

// Simple test route to verify SMTP without submitting the public form
app.post('/api/test-email', requireAdmin, async (req, res) => {
  try {
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const toEmail = process.env.NOTIFY_TO || process.env.SMTP_USER;
    const fromEmail = process.env.FROM_EMAIL || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass || !toEmail || !fromEmail) {
      return res.status(400).json({ message: 'Missing SMTP env vars' });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
      logger: true,
      debug: true,
    });
    await transporter.verify();
    const info = await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: 'Test email from 369 backend',
      text: 'This is a test email to confirm SMTP settings are working.'
    });
    res.json({ ok: true, messageId: info?.messageId });
  } catch (e) {
    console.error('[mail] test failed:', e?.message || e);
    res.status(500).json({ ok: false, error: e?.message || 'send failed' });
  }
});


