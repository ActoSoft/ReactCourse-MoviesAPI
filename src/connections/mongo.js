const mongoose = require('mongoose');
const { convertToBase64 } = require('../utils');

module.exports = () => {
	mongoose.connect(convertToBase64(process.env.DB_URL || ''), {
		useUnifiedTopology: true,
		useNewUrlParser: true
	})
		.then(connection => {
			console.log(`Connected to ${connection.connections[0].name} database`);
		}).catch(error => {
			console.log(`DB connection failed. Details: ${error}`);
		})
	mongoose.set('useFindAndModify', false);
};
