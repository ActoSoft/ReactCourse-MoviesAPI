const BaseController = require('./baseController');
const { CharacterService } = require('../services');
const validateRequest = require('../validators');
const { validatorsConsts } = require('../constants');
const { checkEqualId } = require('../utils');

class CharacterController {

	static createMovie = async (req, res) => {
		const validatorResult = validateRequest(validatorsConsts.createCharacter, req.body);
		if (validatorResult.hasError) return BaseController.returnValidatorResultError(validatorResult, res);
		const createCharacterPayload = req.body;
		const movieId = req.params.movieId;
		const result = await CharacterService.createCharacter(movieId, createCharacterPayload);
		return BaseController.returnResponse(result, res);
	};

	static updateMovie = async (req, res) => {
		const validatorResult = validateRequest(validatorsConsts.updateCharacter, req.body);
		if (validatorResult.hasError) return BaseController.returnValidatorResultError(validatorResult, res);
		const updateCharacterPayload = req.body;
		const movieId = req.params.movieId;
		const characterId = req.params.characterId;
		if (!checkEqualId(characterId, updateCharacterPayload)) {
			return BaseController.returnNotEqualIdError(res);
		}
		const result = await CharacterService.updateCharacter(updateCharacterPayload, movieId, characterId);
		return BaseController.returnResponse(result, res);
	};

	// static deleteMovie = async(req, res) => {
	// 	const movieId = req.params.movieId;
	// 	const result = await MovieService.deleteMovie(movieId);
	// 	return BaseController.returnResponse(result, res);
	// };

};

module.exports = CharacterController;