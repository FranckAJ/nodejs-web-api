let jwt = require('jsonwebtoken');
let HTTPStatus = require('http-status');
import User from '../models/user';
import properties from '../../config/env';

const JWT_KEY = properties.jwt.client_secret;

exports.authenticate = function(req, res, next) {
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
};

