const BaseController = require('./baseController');
const { MovieService } = require('../services');

class MovieController {
	static getAll = async (req, res) => {
		const result = await MovieService.getAll();
		return BaseController.returnResponse(result, res);
	};

	static createMovie = async (req, res) => {
		const createMoviePayload = req.body;
		const result = await MovieService.createMovie(createMoviePayload);
		return BaseController.returnResponse(result, res);
	};

};

module.exports = MovieController;
