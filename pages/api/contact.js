import nodemailer from 'nodemailer';

// Simple in-memory rate limiting (use Redis in production)
const submissions = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_SUBMISSIONS = 2; // Max 2 submissions per minute per IP

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Rate limiting
    const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
    const now = Date.now();
    
    if (submissions.has(clientIP)) {
      const userSubmissions = submissions.get(clientIP);
      // Remove old submissions outside the window
      const recentSubmissions = userSubmissions.filter(time => now - time < RATE_LIMIT_WINDOW);
      
      if (recentSubmissions.length >= MAX_SUBMISSIONS) {
        console.log(`Rate limit exceeded for IP: ${clientIP}`);
        return res.status(429).json({ error: 'Too many submissions. Please wait before submitting again.' });
      }
      
      recentSubmissions.push(now);
      submissions.set(clientIP, recentSubmissions);
    } else {
      submissions.set(clientIP, [now]);
    }

    const { name, email, subject, message } = req.body;

    // Configure Nodemailer with your email credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'fatizforever@gmail.com', // replace with your Gmail address
        pass: process.env.EMAIL_PASS, // replace with your Gmail password or an App Password
      },
    });

    // Create the email message
    const mailOptions = {
      from: 'fatizforever@gmail.com', // replace with your Gmail address
      to: 'skylark7768@gmail.com', // replace with your target email address
      subject: `${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    // Send to webhook
    try {
      console.log('Attempting to send webhook with data:', { name, email, subject, message });
      const webhookResponse = await fetch('https://wespark.tech/webhook-test/portfolio-form-submission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      console.log('Webhook response status:', webhookResponse.status);
      const responseText = await webhookResponse.text();
      console.log('Webhook response body:', responseText);

      if (webhookResponse.ok) {
        console.log('Webhook posted successfully');
      } else {
        console.error('Webhook failed with status:', webhookResponse.status);
      }
    } catch (webhookError) {
      console.error('Webhook error:', webhookError);
    }

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
