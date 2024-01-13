// Import the mailOptions object at the beginning of the file
import { transporter, mailOptions } from "../config/nodemailer";
import { sendMail } from "../config/nodemailer";

// ...

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: "Bad Request" });
    }
    try {
      // Update this part to use the mailOptions object
      await transporter.sendMail({
        ...mailOptions,  // Use the mailOptions object
        subject: data.subject,
        text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
      });

      // Assuming success if the sendMail function didn't throw an error
      return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  return res.status(400).json({ message: "Bad Request" });
};

export default handler;
