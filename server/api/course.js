//file that makes calls to DB to get user's course progress
const router = require('express').Router();
const { CourseStatus, Course, User } = require('../db/index');

// matches GET requests to /api/course/progress/:userId
//gets courses that are in progress for specific user
router.get('/progress/:userId', async (req, res, next) => {
	try {
		const uncompletedCourses = await User.findOne({
			where: {
				id: req.params.userId,
			},
			attributes: ['id'],
			include: [
				{
					model: Course,
					attributes: ['id', 'name', 'pages'],
					through: {
						attributes: ['currentPage'],
						where: { completed: false },
						as: 'status',
					},
				},
			],
		});
		res.status(200).send(uncompletedCourses);
	} catch (err) {
		next(err);
	}
});

//future: get all completed courses for user

module.exports = router;
