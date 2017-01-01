let User = require('../models/user');

exports.save = function(req, res, next) {

	User.forge(req.body).save()
		.then((user) => res.json(user))
		.catch((err) => next(err))
};