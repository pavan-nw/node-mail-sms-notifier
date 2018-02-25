# node-mail-sms-notifier
Node JS project to send out mail and sms using nodemailer and twilio

This acts as notification server part where in using REST ful APIs exposed by this express server, user can send out mail or sms to users.

## How to run
`npm start`

or

if you have nodemon installed globally, then for development to rebuild automatically based on changes then 

`npm run start-app`

## APIs exposed

These APIs can be consumed by any client app like, Android, ReactJS etc..

### Sending SMS - This uses twilio free trial account
`http://localhost:3000/sms`

### Sending MAIL - This uses node-mailer and GSuite mail APIs from Google
`http://localhost:3000/email`

### Screenshots with body of the post api calls
![alt text](https://github.com/pavan-nw/node-mail-sms-notifier/blob/master/sms-api.png "SMS API in Postman Client")

![alt text](https://github.com/pavan-nw/node-mail-sms-notifier/blob/master/mail-api.png "MAIL API in Postman Client")


## Configurations

For SMS SDK by Twilio, we need to provide following `config in node-mail-sms-notifier/config/sms-config.js`

```
const accountAuth = {
  accountSid: "<YOUR_TWILLIO_ACCOUNT_SID>",
  authToken: "<YOUR_AUTH_TOKEN>",
  twilioPhoneNum: "<YOUR_TWILLIO_PHONENUM>"
};
```

For node-mailer we have to provide GSuite service accoint configurations- it is not uploaded in repo but you can follow this <a href='https://developers.google.com/identity/protocols/OAuth2ServiceAccount'>link</a> and put the json file in `node-mail-sms-notifier/config/` and mention this file name in `node-mail-sms-notifier/clients/ems-client.js` as shown below

`const authConfig = require("../config/node-mail-sms-notifier-3671247c7eef.json");`

`node-mail-sms-notifier-3671247c7eef.json` this is the json file downloaded from Google Developers Page when creating service account.
