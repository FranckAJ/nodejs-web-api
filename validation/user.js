let Joi = require('joi');

module.exports = {
	createUser: {
		body: {
		  username: Joi.string(),
		  email: Joi.string().required(),
		  password: Joi.string().required()
		}
	}
}