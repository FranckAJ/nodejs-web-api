'use strict';

var express = require('express');
var authController = require('../controllers/auth');
var validate = require('express-validation');
var isValid = require('../validation/auth');

var router = express.Router();

router.route('/').post(validate(isValid.auth), authController.authenticate);

module.exports = router;