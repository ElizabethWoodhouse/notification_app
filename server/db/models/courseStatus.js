//file creates CourseStatus model
const Sequelize = require('sequelize');
const db = require('../db');

const CourseStatus = db.define('courseStatus', {
	completed: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false,
		validate: {
			notEmpty: true,
		},
	},
	currentPage: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
});

module.exports = CourseStatus;
