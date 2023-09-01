const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

///https://myaccount.google.com/security,also less secure apps access turn it on,signing with google

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

// let details = {
//   // from: "awsuriya@gmail.com",
//   to: "swathy@guvi.in",
//   subject: "Sending Test Mail",
//   text: "this is the message from nodemailer",
// };

const sendMail = async (req, res) => {
  let details = {
    // from: "awsuriya@gmail.com",
    to: "swathysuryababu@gmail.com",
    subject: "Sending Test Mail",
    text: req.body.text,
  };
  mailTransporter.sendMail(details, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("mailsent");
    }
  });
  res.send("I am Sending Mail");
};

module.exports = sendMail;
