const BaseController = require('./baseController');
const { MovieService } = require('../services');
const validateRequest = require('../validators');
const { validatorsConsts } = require('../constants');
const { checkEqualId } = require('../utils');

class MovieController {

	static getAll = async (req, res) => {
		const result = await MovieService.getAll();
		return BaseController.returnResponse(result, res);
	};

	static getOne = async (req, res) => {
		const movieId = req.params.movieId;
		const result = await MovieService.getOne(movieId);
		return BaseController.returnResponse(result, res);
	};

	static createMovie = async (req, res) => {
		const validatorResult = validateRequest(validatorsConsts.createMovie, req.body);
		if (validatorResult.hasError) return BaseController.returnValidatorResultError(validatorResult, res);
		const createMoviePayload = req.body;
		const result = await MovieService.createMovie(createMoviePayload);
		return BaseController.returnResponse(result, res);
	};

	static updateMovie = async (req, res) => {
		const validatorResult = validateRequest(validatorsConsts.updateMovie, req.body);
		if (validatorResult.hasError) return BaseController.returnValidatorResultError(validatorResult, res);
		const updateMoviePayload = req.body;
		const movieId = req.params.movieId;
		if (!checkEqualId(movieId, updateMoviePayload)) {
			return BaseController.returnNotEqualIdError(res);
		}
		const result = await MovieService.updateMovie(updateMoviePayload, movieId);
		return BaseController.returnResponse(result, res);
	};

	static deleteMovie = async(req, res) => {
		const movieId = req.params.movieId;
		const result = await MovieService.deleteMovie(movieId);
		return BaseController.returnResponse(result, res);
	};

};

module.exports = MovieController;
