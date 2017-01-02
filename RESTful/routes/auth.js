let express = require('express');
let authController = require('../controllers/auth');
let validate = require('express-validation');
let isValid = require('../validation/auth');

var router = express.Router();


router.route('/')

	.post(validate(isValid.auth), authController.authenticate);



module.exports = router;