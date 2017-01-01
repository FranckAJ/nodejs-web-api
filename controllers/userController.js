let User = require('../models/user');

exports.save = function(user, callback) {

	User.forge(user).save().then(callback(user));

};