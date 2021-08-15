//file brings all model into one file & creates associations
const User = require('./models/user');
const Course = require('./models/course');
const CourseStatus = require('./models/courseStatus');
const db = require('../db');

//association between user & course
Course.belongsToMany(User, {
	through: CourseStatus,
	foreignKey: 'courseId',
});
User.belongsToMany(Course, {
	through: CourseStatus,
	foreignKey: 'userId',
});

module.exports = {
	User,
	Course,
	CourseStatus,
	db,
};
