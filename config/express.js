let express = require('express');
let bodyParser = require('body-parser');
let expressValidation = require('express-validation');


let app = express();

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function (err, req, res, next) {
  
  if (err instanceof ev.ValidationError){
  	return res.status(err.status).json(err);
  } 

  if (process.env.NODE_ENV !== 'production') {
    return res.status(500).send(err.stack);

  } else {
    return res.status(500);
  }

});

module.exports = app;