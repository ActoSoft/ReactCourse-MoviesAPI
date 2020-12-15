const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CharacterSchema = require('./Character');

const MovieSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: false,
	},
	durationMinutes: {
		type: Number,
		required: false,
	},
	characters: {
		type: [CharacterSchema],
		required: false,
	}
}, { timestamps: true });

module.exports = mongoose.model('Movie', MovieSchema);
