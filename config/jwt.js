let expressJwt = require('express-jwt');  
let properties = require('./env');

const authenticate = expressJwt({
  secret: properties.jwt.client_secret
});

module.exports = authenticate;