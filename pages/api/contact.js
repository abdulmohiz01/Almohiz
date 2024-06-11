import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
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
