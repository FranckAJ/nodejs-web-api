let app = require('./config/express');
let user = require('./models/user');
var usersRoutes = require('./routes/userRouter');

app.get('/', function(req, res) {
	res.end('API Working...');
});

app.use('/v1', usersRoutes);



