'use strict';

var Joi = require('joi');

module.exports = {
	user: {
		body: {
			username: Joi.string(),
			email: Joi.string().required(),
			password: Joi.string().required()
		}
	}
};