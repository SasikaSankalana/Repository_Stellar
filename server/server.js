const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");

// Generate a random OTP
const otp = otpGenerator.generate(6, {
  digits: true,
  lowerCaseAlphabets: false,
  upperCaseAlphabets: false,
  specialChars: false,
});

// Email configuration
const transporter = nodemailer.createTransport({
  service: "Gmail", // e.g., 'Gmail'
  auth: {
    user: "repositorystellar@gmail.com",
    pass: "jetonkhazyluutey",
  },
});

// Email content
const mailOptions = {
  from: "repositorystellar@gmail.com@example.com",
  to: "sasikasankalana321@gmail.com",
  subject: "Your OTP Code",
  text: `Your OTP code is: ${otp}`,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
