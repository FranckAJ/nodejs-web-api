let express = require('express');
var userRoutes = require('./userRouter');
var authRoutes = require('./authRouter');
let expressJwt = require('../../config/jwt');
let router = express.Router();

/**
 *
 */
router.get('/', function(req, res) {
	res.end('<h1>API Working...</h1 <br> <h3>'+process.title +
		' | '+ process.arch +' | '+ process.platform +' </h3>');
});

/**
 *
 */
router.get('/admin', expressJwt, function(req, res) {  
  res.status(200).json(req.user);
});


router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;