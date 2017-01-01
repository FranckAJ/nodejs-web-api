let express = require('express');
let userController = require('../controllers/userController');

var router = express.Router();

router.post('/users', function (req, res) {
	userController.save(req.body, function(obj){
		res.json(obj);
	});
	
});

module.exports = router;