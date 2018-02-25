// require the Twilio module and create a REST client
const config = require("../config/sms-config");

const twilio = require("twilio")(config.accountSid, config.authToken);

class SMSClient {
  constructor() {
    console.log("creating SMS client");
    this.smsClient = twilio;
  }

  getSmsClient() {
    return this.smsClient;
  }

  sendSms(to, body) {
    return new Promise((resolve, reject) => {
      this.smsClient.messages
        .create({
          to,
          from: config.twilioPhoneNum,
          body
        })
        .then(message => {
          console.log(message.sid);
          resolve(message.sid);
        })
        .catch(err => {
          console.log("Error sending SMS : ", err);
          reject(err);
        });
    });
  }
}

module.exports = new SMSClient();
