let express = require('express');
let userController = require('../controllers/userController');

var router = express.Router();


router.post('/users', function (req, res) {
	userController.save(req.body, function(obj){
		if (obj.hasError) {
			res.status(500).json({error: true, data: obj.error});

		}else{
			res.json(obj);	
		} 
	});
	
});

module.exports = router;