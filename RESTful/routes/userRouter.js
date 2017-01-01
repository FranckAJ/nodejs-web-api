let express = require('express');
let userController = require('../controllers/userController');
let validate = require('express-validation');
let isValid = require('../validation/user');

var router = express.Router();


router.route('/users')

	.post(validate(isValid.user), userController.save);



module.exports = router;