const { Errors, Success } = require('../constants');
const { CharacterRepository } = require('../repositories');
const { serviceResult, formatMessage } = require('../utils');

class CharacterService {

	static createCharacter = async (movieId, characterPayload) => {
		try{
			const movieWCharacterCreated = await CharacterRepository.createCharacter(movieId, characterPayload);
			console.log(movieWCharacterCreated)
			if (!movieWCharacterCreated) {
				return serviceResult({ ...formatMessage(Errors.character.failedCreate) }, true);
			}
			return serviceResult({ movie: movieWCharacterCreated, ...formatMessage(Success.character.created) });
		} catch (error) {
			return serviceResult({ error, ...formatMessage(Errors.character.failedCreate) }, true);
		};
	};

	static updateCharacter = async (character, movieId, characterId) => {
		try {
			const movieWCharacterUpdated = await CharacterRepository.updateCharacter(character, movieId, characterId);
			if (!movieWCharacterUpdated) {
				return serviceResult({ ...formatMessage(Errors.character.failedUpdate) }, true);
			}
			return serviceResult({ movie: movieWCharacterUpdated, ...formatMessage(Success.character.updated) });
		} catch (error) {
			return serviceResult({ error, ...formatMessage(Errors.character.failedUpdate) }, true);
		};
	};

	// static deleteMovie = async (movieId) => {
	// 	try{
	// 		const movieDeleted = await MovieRepository.deleteMovie(movieId);
	// 		if (!movieDeleted) {
	// 			return serviceResult({ ...formatMessage(Errors.movie.failedDelete) }, true);
	// 		}
	// 		return serviceResult({ movie: movieDeleted, ...formatMessage(Success.movie.deleted) });
	// 	} catch (error) {
	// 		return serviceResult({ error, ...formatMessage(Errors.movie.failedDelete) }, true);
	// 	};
	// };

}

module.exports = CharacterService;
