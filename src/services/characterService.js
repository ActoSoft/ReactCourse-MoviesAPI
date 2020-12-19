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

	static deleteCharacter = async (movieId, characterId) => {
		try {
			const characterDeleted = await CharacterRepository.deleteCharacter(movieId, characterId)
			if (!characterDeleted) {
				return serviceResult({ ...formatMessage(Errors.character.failedUpdate) }, true);
			}
			return serviceResult({ ...formatMessage(Success.character.deleted) });
		} catch (error) {
			return serviceResult({ error, ...formatMessage(Errors.character.failedDelete) }, true);
		}
	};

}

module.exports = CharacterService;
