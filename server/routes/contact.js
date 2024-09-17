// import express from 'express';
// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config();

// const router = express.Router();

// router.post('/send', async (req, res) => {
//     const { name, email, message } = req.body;

//     // Configure the transporter using your email service credentials from .env
//     let transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: process.env.EMAIL_USERNAME,
//             pass: process.env.EMAIL_PASSWORD,
//         },
//     });

//     // Set up mail options
//     let mailOptions = {
//         from: process.env.EMAIL_USERNAME,  // Use your email as the sender
//         to: process.env.RECEIVER_EMAIL,    // Send the email to yourself or another specified email
//         subject: `Contact Form Submission from ${name}`,
//         text: `You have received a new message from your website contact form.\n\n` +
//             `Here are the details:\n\n` +
//             `Name: ${name}\n\n` +
//             `Email: ${email}\n\n` +
//             `Message:\n${message}\n`,
//     };

//     try {
//         // Send the email
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ message: 'Failed to send email', error: error.message });
//     }
// });

// export default router;
























routes / contact.js
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/send', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.RECEIVER_EMAIL,
            subject: `Message from ${name}`,
            text: message,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send message.' });
    }
});

export default router;
