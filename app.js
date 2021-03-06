import app from './config/express';
import routes from './api/routes';

app.use('/api', routes);

/**
 * Server runtime
 */
app.set('port', (process.env.PORT || 3000));

let server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log(' Server running in: ' + port);

});



