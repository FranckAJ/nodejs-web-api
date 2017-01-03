import User from '../models/user';
import HTTPStatus from 'http-status';

exports.save = function(req, res, next) {

	User.forge(req.body).save()
		.then((user) => res.json(user))
		.catch((err) => next(err))
};

exports.update = function(req, res, next) {
	User.forge(req.body).save()
		.then((user) => res.json(user))
		.catch((err) => next(err))
};

exports.remove = function(req, res, next) {
	User.forge({ id:req.params.userId })
		.destroy()
		.then((user) => res.json(user))
		.catch((err) => next(err))
};

exports.findAll = function(req, res, next) {
	User.forge()
		.fetch()
		.then((users) => res.json(users))
		.catch((err) => next(err))
};

exports.findOne = function(req, res, next) {
	User.forge({ id:req.params.userId })
		.fetch({require: true})
		.then((user) => res.json(user))
		.catch((err) => next('user not found', HTTPStatus.NOT_FOUND))
};