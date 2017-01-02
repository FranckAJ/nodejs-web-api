let express = require('express');
let userController = require('../controllers/user');
let validate = require('express-validation');
let isValid = require('../validation/user');

var router = express.Router();


router.route('/')

	.post(validate(isValid.user), userController.save);



module.exports = router;