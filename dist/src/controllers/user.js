'use strict';

var User = require('../models/user');

exports.save = function (req, res, next) {

	User.forge(req.body).save().then(function (user) {
		return res.json(user);
	}).catch(function (err) {
		return next(err);
	});
};