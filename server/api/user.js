//file that makes calls to DB to get user information
const router = require('express').Router();
const { User } = require('../db/index');

// matches GET requests to /api/user/:userId
//gets user information
router.get('/:username', async (req, res, next) => {
	try {
		const user = await User.findAll({
			where: {
				userName: req.params.username,
			},
			attributes: ['id', 'userName'],
		});
		console.log(user, 'user');
		res.status(200).send(user);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
