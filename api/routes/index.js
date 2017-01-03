import express from 'express';
import userRoutes from './user';
import authRoutes from './auth';
import expressJwt from '../../config/jwt';
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

module.exports = router;