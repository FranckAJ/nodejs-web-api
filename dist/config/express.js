'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var expressValidation = require('express-validation');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (err, req, res, next) {

  if (err instanceof ev.ValidationError) {
    return res.status(err.status).json(err);
  }

  if (process.env.NODE_ENV !== 'production') {
    return res.status(500).send(err.stack);
  } else {
    return res.status(500);
  }
});

module.exports = app;