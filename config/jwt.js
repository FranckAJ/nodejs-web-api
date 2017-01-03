let expressJwt = require('express-jwt');  
import properties from './env';

const authenticate = expressJwt({
  secret: properties.jwt.client_secret
});

module.exports = authenticate;