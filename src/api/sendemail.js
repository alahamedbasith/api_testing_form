const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Define the /send-email endpoint
app.post('contact/sendemail', (req, res) => {
    const { name, email, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "alahamedbasithce@gmail.com", // Use environment variables
        pass: "amnbzamsacwumroy"
      }
    });
  
    const mailOptions = {
      from: email,
      to: 'ahamedbasith006@gmail.com', // Replace with the recipient's email address
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error sending email' }); // Send JSON response
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully' }); // Send JSON response
      }
    });
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
