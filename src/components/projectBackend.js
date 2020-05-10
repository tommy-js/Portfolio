router.post("/send", (req, res, next) => {
  var mail = {
    from: name,
    to: "TylerBlovatEngineering@gmail.com", //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: "content"
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});
