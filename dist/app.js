'use strict';

var _express = require('./config/express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./api/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_express2.default.use('/api', _routes2.default);

/**
 * Server runtime
 */
_express2.default.set('port', process.env.PORT || 3000);

var server = _express2.default.listen(_express2.default.get('port'), function () {
  var port = server.address().port;
  console.log(' Server running in: ' + port);
});