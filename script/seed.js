//file has all seed information for notification app
const db = require('../server/db/db');
const { User, Course, CourseStatus } = require('../server/db/index');

async function seed() {
	await db.sync({ force: true });
	console.log('db synced!');
	// Creating Users
	const users = [
		{
			userName: 'Lana',
			fullname: 'Lana Kim',
			email: 'Lana@gmail.com',
		},
		{
			userName: 'Sandra',
			fullname: 'Sandra Halford',
			email: 'Sandra@gmail.com',
		},
		{
			userName: 'James',
			fullname: 'James Ferguson',
			email: 'James@gmail.com',
		},
		{
			userName: 'Margaret',
			fullname: 'Margaret Davis',
			email: 'Margaret@gmail.com',
		},
	];
	const bulkCreateUsers = await User.bulkCreate(users);
	console.log(`seeded ${users.length} users`);
	//Creating courses
	const courses = [
		{
			name: 'Introduction to Fundraising',
			pages: 10,
		},
		{
			name: 'Advanced Grant Writing',
			pages: 20,
		},
		{
			name: 'Budgeting in a Nonprofit Organization',
			pages: 15,
		},
		{
			name: 'How to onboard new hires',
			pages: 30,
		},
	];
	const bulkCreateCourses = await Course.bulkCreate(courses);
	console.log(`seeded ${courses.length} courses`);
	// Creating user course status
	const statuses = [
		{
			userId: 1,
			courseId: 1,
			completed: false,
			currentPage: 1,
		},
		{
			userId: 1,
			courseId: 2,
			completed: true,
			currentPage: 20,
		},
		{
			userId: 1,
			courseId: 3,
			completed: false,
			currentPage: 10,
		},
		{
			userId: 2,
			courseId: 1,
			completed: true,
			currentPage: 10,
		},
		{
			userId: 2,
			courseId: 2,
			completed: false,
			currentPage: 10,
		},
		{
			userId: 2,
			courseId: 3,
			completed: false,
			currentPage: 10,
		},
		{
			userId: 3,
			courseId: 1,
			completed: true,
			currentPage: 10,
		},
		{
			userId: 3,
			courseId: 4,
			completed: false,
			currentPage: 10,
		},
	];
	const bulkCreateStatus = await CourseStatus.bulkCreate(statuses);
	console.log(`seeded ${statuses.length} course statuses`);
	console.log(`seeded successfully`);
}

async function runSeed() {
	console.log('seeding...');
	try {
		await seed();
	} catch (err) {
		console.error(err);
		process.exitCode = 1;
	} finally {
		console.log('closing db connection');
		await db.close();
		console.log('db connection closed');
	}
}

if (module === require.main) {
	runSeed();
}

module.exports = seed;
