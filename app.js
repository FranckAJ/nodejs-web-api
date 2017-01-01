let app = require('./config/express');
var usersRoutes = require('./RESTful/routes/userRouter');

/**
 *
 */
app.get('/', function(req, res) {
	res.end('<h1>API Working...</h1 <br> <h3>'+process.title +
		' | '+ process.arch +' | '+ process.platform +' </h3>');
});

app.use('/api', usersRoutes);


/**
 * Server runtime
 */
app.set('port', (process.env.PORT || 3000));

let server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log(' Server running in: ' + port);

});



