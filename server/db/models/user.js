//file creates User model
const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
	userName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	fullname: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	email: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false,
		validate: {
			notEmpty: true,
			isEmail: true,
		},
	},
});

module.exports = User;
