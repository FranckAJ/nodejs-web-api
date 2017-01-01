let express = require('express');
let bodyParser = require('body-parser');
let expressValidation = require('express-validation');


let app = express();

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(err, req, res, next){
  if (err instanceof expressValidation.ValidationError) {
    res.status(err.status).json(err);

  } else {
    res.status(500).json(err)
  }

});

module.exports = app;