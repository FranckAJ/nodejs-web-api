'use strict';

var jwt = require('jsonwebtoken');
var HTTPStatus = require('http-status');
var User = require('../models/user');
var properties = require('../../config/env');

var JWT_KEY = properties.jwt.client_secret;

exports.authenticate = function (req, res, next) {
	var user;
	User.forge({ username: req.body.username }).fetch({ require: true }).then(function (result) {
		user = result;
		return result.compare(req.body.password);
	}).then(function (isValid) {
		console.log(isValid);
		if (isValid) {
			res.json({
				token: jwt.sign({ username: user.username }, JWT_KEY)
			});
		}
	}).catch(function (err) {
		return next(HTTPStatus.UNAUTHORIZED);
	});
};