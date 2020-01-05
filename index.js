// Express
const session = require("express-session");
const { ExpressOIDC } = require("@okta/oidc-middleware");

const express = require("express");
const app = express();
const port = 8080;

// Session support is required to use ExpressOIDC
app.use(
  session({
    secret: "Some Secret",
    resave: true,
    saveUninitialized: false,
    cookie: { secure: true }
  })
);

const oidc = new ExpressOIDC({
  issuer: "https://dev-937960.okta.com/oauth2/default", // Your Okta URL
  client_id: "0oa2ddwno5N34FXC6357", // Your Okta APP Client ID
  client_secret: "Kz6oow8zfulYDnL12ncGCFGBmfRoeWcsouunNPln", // Your Okta APP Client ID
  redirect_uri: "http://localhost:8080/authorization-code/callback",
  scope: "openid profile"
});

// ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
app.use(oidc.router);

app.get("/protected", oidc.ensureAuthenticated(), (req, res) => {
  res.send(JSON.stringify(req.userContext.userinfo));
});

app.get("/", (req, res) => {
  if (req.userContext && req.userContext.userinfo) {
    res.send(`Hi ${req.userContext.userinfo.name}! You are logged!`);
  } else {
    res.send("Hi! You are not logged.");
  }
});

oidc.on("ready", () => {
  app.listen(port, () => console.log(`App1 Express Server Started!`));
});

oidc.on("error", err => {
  console.log("Unable to configure ExpressOIDC", err);
});
