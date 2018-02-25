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
