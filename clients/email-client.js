const nodemailer = require("nodemailer");
const authConfig = require("../config/node-mail-sms-notifier-df7aee140f61.json");

class EmailClient {
  constructor() {
    console.log("email client created");
    // console.log(authConfig.client_id);
    // console.log(authConfig.private_key);
    this.client = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: "myselfcoder@gmail.com",
        serviceClient: authConfig.client_id,
        privateKey: authConfig.private_key
      }
    });
  }

  sendMail(to, html, subject) {
    this.client
      .sendMail({
        to,
        html,
        subject
      })
      .then(info => {
        console.log(info);
      })
      .catch(error => {
        console.log("Error is ", error);
      });
  }
}

module.exports = new EmailClient();
