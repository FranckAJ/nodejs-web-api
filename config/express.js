let express = require('express');
let bodyParser = require('body-parser');
let expressValidation = require('express-validation');


let app = module.exports = express();

app.set('port', (process.env.PORT || 3000));

let server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log(' Server running in: ' + port);

});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    res.status(err.status).json(err);
  } else {
    res.status(500)
      .json({
        status: err.status,
        message: err.message
      });
  }
});


