'use strict';

var _env = require('./env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expressJwt = require('express-jwt');


var authenticate = expressJwt({
  secret: _env2.default.jwt.client_secret
});

module.exports = authenticate;