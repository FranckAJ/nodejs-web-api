let expressJwt = require('express-jwt');  
const JWT_KEY = 'lets go';

const authenticate = expressJwt({
  secret: JWT_KEY
});

module.exports = authenticate;