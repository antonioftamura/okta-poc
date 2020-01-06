# Okta-POC

This project contains source code and supporting files for Okta POC using JWT tokens to validade the session.
You need a Okta account and Application set up, and change the code with your credentials.

## Run the sample application

Install the packages

```
npm install
```

- App1 
This app will be responsible to login in the okta and receive the JWT token.

```
node app1.js
```

You need to request a protected route:
http://localhost:8080/login

Use your Okta credentials to login.

You will receive a Logged in page and your token to verify in the App2.

- App2 
This app will be responsible to check if the token is valid.

```
node app2.js
```

Send a POST request:
http://localhost:8081/verify
Sending the token in the body.

```
> POST /verify HTTP/1.1
> Host: localhost:8081
> User-Agent: insomnia/7.0.6
> Content-Type: application/x-www-form-urlencoded
> Accept: */*
> Content-Length: 836

token=YOURTOKENHERE
```

The app will check the token validation and will inform in the respose.