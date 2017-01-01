let app = require('./config/express');
let user = require('./models/user');
var usersRoutes = require('./routes/userRouter');

app.get('/', function(req, res) {
	res.end('<h1>API Working...</h1 <br> <h3>'+process.title +
		' | '+ process.arch +' | '+ process.platform +' </h3>');
});

app.use('/v1', usersRoutes);



