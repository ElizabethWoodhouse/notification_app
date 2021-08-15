//file creates Course model
const Sequelize = require('sequelize');
const db = require('../db');

const Course = db.define('course', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	pages: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true,
			isEmail: true,
		},
	},
});

module.exports = Course;
