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
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
              .content { background: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
              .field { margin-bottom: 20px; }
              .label { font-weight: 600; color: #667eea; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px; }
              .value { font-size: 16px; color: #333; word-wrap: break-word; }
              .message-box { background: #f5f5f5; padding: 15px; border-left: 4px solid #667eea; border-radius: 4px; margin-top: 10px; }
              .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #999; }
              .divider { height: 1px; background: #eee; margin: 20px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📬 New Contact Form Submission</h1>
              </div>
              <div class="content">
                <p>You have received a new message from your portfolio contact form:</p>
                <div class="divider"></div>
                
                <div class="field">
                  <span class="label">From</span>
                  <div class="value">${name}</div>
                </div>

                <div class="field">
                  <span class="label">Email</span>
                  <div class="value"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></div>
                </div>

                <div class="field">
                  <span class="label">Subject</span>
                  <div class="value">${subject}</div>
                </div>

                <div class="field">
                  <span class="label">Message</span>
                  <div class="message-box">${message.replace(/\n/g, '<br/>')}</div>
                </div>

                <div class="divider"></div>
                <p style="font-size: 14px; color: #666; margin-bottom: 0;">
                  <strong>Quick action:</strong> Reply directly to ${email} or use your portfolio admin panel to respond.
                </p>

                <div class="footer">
                  <p>This email was sent from your portfolio website.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    console.log('Contact email response:', contactEmailResponse);

    const confirmationEmailResponse = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Message Received - Nagavishnu Portfolio',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .header h1 { margin: 0 0 10px 0; font-size: 28px; font-weight: 600; }
              .header p { margin: 0; font-size: 14px; opacity: 0.9; }
              .content { background: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
              .tick { font-size: 48px; margin-bottom: 10px; }
              .section { margin: 25px 0; }
              .section-title { font-size: 14px; font-weight: 600; color: #667eea; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px; }
              .section-content { font-size: 15px; color: #555; }
              .highlight { background: #f0f4ff; padding: 15px; border-radius: 4px; border-left: 4px solid #667eea; }
              .button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: 500; margin-top: 15px; }
              .divider { height: 1px; background: #eee; margin: 20px 0; }
              .footer { text-align: center; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #999; margin-top: 30px; }
              .social { margin-top: 20px; }
              .social a { display: inline-block; margin: 0 8px; color: #667eea; text-decoration: none; font-size: 13px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="tick">✓</div>
                <h1>Message Received!</h1>
                <p>Thank you for reaching out</p>
              </div>
              <div class="content">
                <p>Hi <strong>${name}</strong>,</p>
                
                <p>I've received your message about "<strong>${subject}</strong>" and I appreciate you taking the time to get in touch!</p>

                <div class="highlight">
                  <div class="section-title">📧 Your Message</div>
                  <div style="font-style: italic; color: #666; margin-top: 10px;">"${message.replace(/\n/g, '<br/>')}"</div>
                </div>

                <div class="section">
                  <div class="section-title">What's Next?</div>
                  <div class="section-content">
                    I'll review your inquiry and get back to you as soon as possible. Typically, you can expect a response within 24-48 hours.
                  </div>
                </div>

                <div class="section">
                  <div class="section-title">Contact Information</div>
                  <div class="section-content">
                    <strong>Your Email:</strong> ${email}<br>
                    <strong>Received:</strong> ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>

                <div class="divider"></div>

                <p style="font-size: 14px; color: #666;">
                  In the meantime, feel free to check out my portfolio and explore my recent projects and skills. If you have any other questions, you can always reply to this email.
                </p>

                <p style="margin: 30px 0;">Best regards,<br><strong>Nagavishnu Karthik B S</strong><br><span style="font-size: 13px; color: #999;">Full Stack Developer</span></p>

                <div class="social">
                  <a href="https://github.com/nagavishnu-05">GitHub</a>
                  <a href="https://www.linkedin.com/in/naga-vishnu-karthik-b-s/">LinkedIn</a>
                </div>

                <div class="footer">
                  <p>This is an automated confirmation email. Please do not reply with sensitive information.</p>
                  <p>© ${new Date().getFullYear()} Nagavishnu Portfolio. All rights reserved.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
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
