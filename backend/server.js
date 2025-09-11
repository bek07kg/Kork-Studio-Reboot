require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(express.json());

// CORS — разрешаем запросы с фронтенда
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173'
}));

// Ограничение запросов (защита от спама)
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 минута
  max: 6,
  standardHeaders: true,
  legacyHeaders: false
});
app.use('/api/contact', limiter);

// SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT || 587),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// API endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Заполните все поля.' });
    }

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `Новое сообщение с сайта`,
      text: `Имя: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `
    });

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ошибка при отправке письма.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Backend запущен на http://localhost:${PORT}`));
