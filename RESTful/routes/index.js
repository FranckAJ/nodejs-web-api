let express = require('express');
var userRoutes = require('./userRouter');
var authRoutes = require('./authRouter');
let expressJwt = require('express-jwt');  
let authenticate = expressJwt({secret : 'lets go'});

let router = express.Router();

/**
 *
 */
router.get('/', function(req, res) {
	res.end('<h1>API Working...</h1 <br> <h3>'+process.title +
		' | '+ process.arch +' | '+ process.platform +' </h3>');
});

router.use('/users', userRoutes);
router.use('/auth', authRoutes);


/**
 *
 */
router.get('/admin', authenticate, function(req, res) {  
  res.status(200).json(req.user);
});


// mount authentication routes at /auth
router.use('/auth', authRoutes);
// mount user routes at /users
router.use('/users', userRoutes);

module.exports = router;