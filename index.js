const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "eaf45a72a3d0ec",
    pass: "b6115e6e89b3d2"
  }
});

const message = {
    from: 'brieyananicole@gmail.com',
    to: 'briehaynes9@gmail.com',
    subject: 'Sending Email Using SMTP',
    text: 'Hello World!'
  };

transport.sendMail(message, (err, info) =>  {
    if (err)
        console.log(err);

    else
        console.log(info);
})
