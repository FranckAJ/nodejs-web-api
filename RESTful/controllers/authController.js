let User = require('../models/user');

exports.authenticate = function(req, res, next) {

	User.forge(req.body.email)
		.fetch({require: true})
		.then((user) => user.compare(req.body.password))
		.then((isValid) => res.json({login: isValid}))
		.catch((err) => next(err))
};