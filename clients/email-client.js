const nodemailer = require("nodemailer");
const authConfig = require("../config/node-mail-sms-notifier-3671247c7eef.json");

class EmailClient {
  constructor() {
    console.log("email client created");
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

  sendMail(to, html, subject, successCb, errCb) {
    this.client
      .sendMail({
        to,
        html,
        subject
      })
      .then(info => {
        console.log(info);
        successCb(info);
      })
      .catch(error => {
        console.log("Error is ", error);
        errCb(error);
      });
  }
}

module.exports = new EmailClient();
