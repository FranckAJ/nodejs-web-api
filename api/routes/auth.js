import express from 'express';
import authController from '../controllers/auth';
import validate from 'express-validation';
import isValid from '../validation/auth';

var router = express.Router();


router.route('/')
	.post(validate(isValid.auth), authController.authenticate);

module.exports = router;
