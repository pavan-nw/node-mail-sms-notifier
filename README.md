# node-mail-sms-notifier
Node JS project to send out mail and sms using nodemailer and twillio

## How to run
`npm start`

or

if you have nodemon installed globally, then for development to rebuild automatically based on changes then 

`npm run start-app`

## APIs exposed

### Sending SMS - This uses twilio free trial account
`http://localhost:3000/sms`

### Sending MAIL - This uses node-mailer and GSuite mail APIs from Google
`http://localhost:3000/email`

### Screenshots with body of the post api calls
