const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
	biography: {
		type: String,
		required: false,
	}
}, { timestamps: true })

module.exports(mongoose.model('Character', CharacterSchema));