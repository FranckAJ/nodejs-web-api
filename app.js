let app = require('./config/express');
var userRoutes = require('./RESTful/routes/userRouter');
var authRoutes = require('./RESTful/routes/authRouter');
let expressJwt = require('express-jwt');  
let authenticate = expressJwt({secret : 'lets go'});


/**
 *
 */
app.get('/', function(req, res) {
	res.end('<h1>API Working...</h1 <br> <h3>'+process.title +
		' | '+ process.arch +' | '+ process.platform +' </h3>');
});

app.use('/api', userRoutes);
app.use('/api', authRoutes);



app.get('/admin', authenticate, function(req, res) {  
  res.status(200).json(req.user);
});


/**
 * Server runtime
 */
app.set('port', (process.env.PORT || 3000));

let server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log(' Server running in: ' + port);

});



