import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const { RESEND_API_KEY, RECIPIENT_EMAIL } = process.env;
if (!RESEND_API_KEY) {
  throw new Error('Missing required environment variable: RESEND_API_KEY');
}
if (!RECIPIENT_EMAIL) {
  throw new Error('Missing required environment variable: RECIPIENT_EMAIL');
}

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(RESEND_API_KEY);

app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      message: 'All fields are required',
    });
  }

  try {
    console.log('Sending contact email to', RECIPIENT_EMAIL, 'and confirmation to', email);
    console.log('RESEND_API_KEY exists:', !!RESEND_API_KEY, 'length:', RESEND_API_KEY?.length);

    const contactEmailResponse = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: RECIPIENT_EMAIL,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <p><strong>New Contact Form Submission</strong></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });
    console.log('Contact email response:', contactEmailResponse);

    const confirmationEmailResponse = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Message Received',
      html: `
        <p><strong>Thank You</strong></p>
        <p>Hi ${name},</p>
        <p>Your message has been received successfully.</p>
        <p>I will get back to you shortly.</p>
        <p>Regards,<br/>Nagavishnu Karthik B S</p>
      `,
    });
    console.log('Confirmation email response:', confirmationEmailResponse);

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Resend error:', error?.message || error);
    console.error('Full error object:', JSON.stringify(error, null, 2));

    return res.status(500).json({
      success: false,
      message: error?.message ? `Error sending email: ${error.message}` : 'Failed to send email',
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
