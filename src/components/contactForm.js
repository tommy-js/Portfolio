var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

var transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "TylerBlovatProfile@gmail.com",
      pass: "VIOn0s6xoSMfdDN"
    }
  })
);

var mailOptions = {
  from: "TylerBlovatProfile@gmail.com",
  to: "TylerBlovatEngineering@gmail.com",
  subject: "Sending Email using Node.js[nodemailer]",
  text: "That was easy!"
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
