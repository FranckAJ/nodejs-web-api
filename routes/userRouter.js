let express = require('express');
let User = require('../models/user');

var router = express.Router();

router.post('/users', function (req, callback) {

	User.forge(req.body)
		.save()
		.then((user) => callback(user));
});

module.exports = router;