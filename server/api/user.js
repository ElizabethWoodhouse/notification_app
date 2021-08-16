//file that makes calls to DB to get user information
const router = require('express').Router();
const { User } = require('../db/index');

// matches GET requests to /api/user/:userId
//gets user information
router.get('/:username', async (req, res, next) => {
	try {
		const user = await User.findOne({
			where: {
				userName: req.params.username,
			},
			attributes: ['id', 'userName', 'fullname'],
		});
		//if user exists send user otherwise send 404 status
		if (user) {
			res.send(user);
		} else {
			res.sendStatus(404);
		}
	} catch (err) {
		next(err);
	}
});

module.exports = router;
