//file that re-routes API requests to correct file and handles erorrs if no API route is found
const router = require('express').Router();
module.exports = router;

router.use('/course', require('./course'));
router.use('/user', require('./user'));

router.use((req, res, next) => {
	const error = new Error('API route requested not found');
	error.status = 404;
	next(error);
});
