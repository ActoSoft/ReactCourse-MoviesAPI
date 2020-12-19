const { Movie } = require('../models');

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
		return Movie
			.findOneAndUpdate(
				{ _id: movieId, characters: { $elemMatch: { _id: characterId }}},
				{ $set: {
					'characters.$.name': character.name,
					'characters.$.img': character.img,
					'characters.$.biography': character.biography
				}},
				{ new: true }
			)
			.then(movie => movie)
			.catch(error => error)
	};

	static deleteCharacter = async (movieId, characterId) => {
		return Movie
			.findOneAndUpdate(
				{ _id: movieId },
				{ $pull: {characters: { _id: characterId } } },
				{ new: true }
			)
			.then(movie => movie)
			.catch(error => error)
	};

};

module.exports = CharacterRepository;