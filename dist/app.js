'use strict';

var app = require('./config/express');
var routes = require('./src/routes');

app.use('/api', routes);

/**
 * Server runtime
 */
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
  var port = server.address().port;
  console.log(' Server running in: ' + port);
});