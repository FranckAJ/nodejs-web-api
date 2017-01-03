import express from 'express';
import userController from '../controllers/user';
import validate from 'express-validation';
import isValid from '../validation/user';
import auth from '../../config/jwt';

var router = express.Router();


router.route('/')

	.post(validate(isValid.user), userController.save)
	.put(auth, validate(isValid.user), userController.update)
	.get(userController.findAll);

router.route('/:userId')

	.get(auth, userController.findOne)
	.delete(auth, userController.remove);

module.exports = router;