let express = require('express');
let userController = require('../controllers/userController');

var router = express.Router();

router.post('/users', function (req, res) {
	userController.save(req.body, function(user){
		res.json(user);
	});
	
});

module.exports = router;