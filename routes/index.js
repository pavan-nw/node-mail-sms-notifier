var express = require("express");
var router = express.Router();
const emailClient = require("../clients/email-client");
const smsClient = require("../clients/sms-client");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/email", function(req, res, next) {
  const body = req.body.emailPayload;
  const apiResp = {};
  emailClient.sendMail(
    body.to,
    body.html,
    body.subject,
    info => {
      apiResp.status = "Success";
      apiResp.resource = info;
      res.json(apiResp);
    },
    error => {
      apiResp.status = "Fail";
      apiResp.error = error;
      res.json(apiResp);
    }
  );
});

router.post("/sms", function(req, res, next) {
  const body = req.body.smsPayload;
  const apiResp = {};
  smsClient
    .sendSms(body.to, body.text)
    .then(info => {
      apiResp.status = "Success";
      apiResp.resource = info;
      res.json(apiResp);
    })
    .catch(error => {
      apiResp.status = "Fail";
      apiResp.error = error;
      res.json(apiResp);
    });
});

module.exports = router;
