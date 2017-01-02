'use strict';

var express = require('express');
var userController = require('../controllers/user');
var validate = require('express-validation');
var isValid = require('../validation/user');

var router = express.Router();

router.route('/').post(validate(isValid.user), userController.save);

module.exports = router;