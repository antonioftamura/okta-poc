const OktaJwtVerifier = require("@okta/jwt-verifier");

// Okta Issuer of the Token
const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: "https://dev-937960.okta.com/oauth2/default"
});

// Token received after authentication
const accessTokenString =
  "eyJraWQiOiJ0QW1xR3ZJWWdyTXNya3JUcFd0MmkwQ3dsdXNzcEVfMkFzZEZURWNtSmlzIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULm1ndkdQdzZ2TEZVWkpER3ZJd2ExRTZqWEtua0dJTVNoZWlTQTVJN19Lb0EiLCJpc3MiOiJodHRwczovL2Rldi05Mzc5NjAub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNTc4MDA2MzQ0LCJleHAiOjE1NzgwMDk5NDQsImNpZCI6IjBvYTJkZHdubzVOMzRGWEM2MzU3IiwidWlkIjoiMDB1MmRkeXNhZDZ4Y01SZFUzNTciLCJzY3AiOlsicHJvZmlsZSIsIm9wZW5pZCJdLCJzdWIiOiJhbnRvbmlvLmZpZ3VlaXJlZG9AZG54LnNvbHV0aW9ucyJ9.ab4YbWjWpZGeS9qmUws5CvzOi7j6zwOlmboQ_aaP21VBqhS8evRibs_LSXe3VHCKl6AcGq9I4rj8i0hsiewTjPsUJrsxaFRq_USnZCVWBSwb16SGyS3SbXy4xzLUXM_uhsZTkLLQJ-1YRtndJAEgVhVDRi3M0XtK6Rc9ucNWFMC9JD5GS5CostLi0F7zkJaCgwuBM07WGs_qzZ9peNF6TB3AJIHJPclVWcFP5Bbosaspjc_kAsYVh7v4bItVqDXCQ5b1Xi-eVP3LMQiH2s6dkY8ioUc6LboWJxn6QoZzfOWk9UydGAA9zNmsZ5RJfwmQ7ersrRjbw2KlUcAveYAuCA";

  oktaJwtVerifier.verifyAccessToken(accessTokenString, 'api://default')
  .then(jwt => console.log('token is valid', jwt) )
  .catch(err => console.warn('token failed validation', err) );