//file starts server, listens for incoming request & seeds our database
const db = require('./db/db');
const PORT = process.env.PORT || 8080;
const app = require('./app');
const seed = require('../script/seed');

const init = async () => {
	try {
		if (process.env.SEED === 'true') {
			await seed();
		} else {
			await db.sync();
		}
		app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};
init();
