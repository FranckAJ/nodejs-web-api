let jwt = require('jsonwebtoken');
let HTTPStatus = require('http-status');
import User from '../models/user';
import properties from '../../config/env';
import github from '../../config/github.js';

const JWT_KEY = properties.jwt.client_secret;

exports.authenticate = (req, res, next) => {

	if(req.body.typeAuth === 'LOCAL'){
		var user;
		User.forge({username: req.body.username})
			.fetch({require: true})
			.then((result) => {
				 user = result;
				 return result.compare(req.body.password);
			})
			.then((isValid) => {
				console.log(isValid);
				if(isValid){
					res.json({
						token: jwt.sign({username: user.username}, JWT_KEY)
					})
				}
			})
			.catch((err) => next(HTTPStatus.UNAUTHORIZED))

	}else{
		github.authenticate({
			type: "basic",
			username: req.body.username,
			password: req.body.password
		});
		github.users.get({}, function(errAPI, resAPI) {
			User.forge(
					{username: resAPI.login,
					 		password: req.body.password,
					  	email: resAPI.email,
						 	typeAuth: req.body.typeAuth
					 }).save()
				.then((user) => res.json(resAPI))
				.catch((err) => next(err))
		});
	}
};
