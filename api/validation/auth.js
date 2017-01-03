import Joi from 'joi';

module.exports = {
	auth: {
		body: {
		  username: Joi.string().required(),
		  password: Joi.string().required()
		}
	}
};