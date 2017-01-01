let express = require('express');
let userController = require('../controllers/userController');
let validate = require('express-validation');
let paramValidation = require('../validation/user');

var router = express.Router();


router.route('/users')

	.post(validate(paramValidation.createUser), userController.save);



module.exports = router;