let app = require('./config/express');

app.get('/', function(req, res) {
	res.end('API Test...');
});

