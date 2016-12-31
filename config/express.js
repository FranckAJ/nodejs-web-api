let express = require('express');
let bodyParser = require('body-parser');

let app = module.exports = express();

app.set('port', (process.env.PORT || 3000));

let server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log(' Server running in: ' + port);

});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();

});