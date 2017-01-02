'use strict';

var expressJwt = require('express-jwt');
var properties = require('./env');

var authenticate = expressJwt({
  secret: properties.jwt.client_secret
});

module.exports = authenticate;