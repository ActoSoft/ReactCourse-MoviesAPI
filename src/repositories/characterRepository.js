const { Mongoose } = require('mongoose');
const { Character, Movie } = require('../models');

class CharacterRepository {

	static createCharacter = async (movieId, character) => {
		return Movie
			.findOneAndUpdate(
				{ _id: movieId },
				{ $push: { characters: character } },
				{ new: true }
			)
			.then(movie => movie)
			.catch(error => error)
	};

	static updateCharacter = async (character, movieId, characterId) => {
		console.log('updating')
		return Movie
			.findOne(
				{ _id: movieId, 'characters': Mongoose.Types.ObjectId(characterId) }
			)
			.then(movie => {
				console.log(movie);
				return movie;
			})
			.catch(error => error)
	};

	// static deleteMovie = async (movieId) => {
	// 	return Movie
	// 		.deleteOne({ _id: movieId })
	// 		.then(movie => movie)
	// 		.catch(error => error)
	// };

};

module.exports = CharacterRepository;