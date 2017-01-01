let express = require('express');
let authController = require('../controllers/authController');
let validate = require('express-validation');
let isValid = require('../validation/auth');

var router = express.Router();


router.route('/sessions')

	.post(validate(isValid.auth), authController.authenticate);



module.exports = router;