// Express
const express = require("express");
const bodyParser = require('body-parser');
const OktaJwtVerifier = require("@okta/jwt-verifier");

const app = express();
const port = 8081;

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());

// Okta Issuer of the Token
const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: "https://dev-937960.okta.com/oauth2/default"
});

app.post("/verify", (req, res) => {
  if(req.body && req.body.token)
  {
    oktaJwtVerifier.verifyAccessToken(req.body.token, 'api://default')
    .then(jwt => res.send('Token is valid => '+ jwt))
    .catch(err => res.send('Token failed validation => '+ err));
  } 
  else 
  {
    res.send("Token not found.");
  }
});

app.listen(port, () => console.log(`App2 Express Server Started!`));
