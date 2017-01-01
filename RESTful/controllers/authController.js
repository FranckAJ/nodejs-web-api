let User = require('../models/user');
let jwt = require('jsonwebtoken');
var HTTPStatus = require('http-status');

const JWT_KEY = 'lets go';


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
		.catch(res.send("invalid username", HTTPStatus.UNAUTHORIZED))
};

