const { Errors, Success } = require('../constants');
const { MovieRepository } = require('../repositories');
const { serviceResult, formatMessage } = require('../utils');

class MovieService {

	static getAll = async () => {
		try {
			const movies = await MovieRepository.getMovies();
			if (!movies) {
				return serviceResult({ ...formatMessage(Errors.movie.failedGetAll) }, true);
			}
			return serviceResult(movies);
		} catch (error) {
			return serviceResult({ error, ...formatMessage(Errors.movie.failedGetAll) }, true);
		};
	};

	static getOne = async (movieId) => {
		try {
			const movie = await MovieRepository.getMovie(movieId);
			if (!movie) {
				return serviceResult({ ...formatMessage(Errors.movie.failedGetOne) }, true);
			}
			return serviceResult(movie);
		} catch (error) {
			return serviceResult({ error, ...formatMessage(Errors.movie.failedGetOne) }, true);
		};
	};

	static createMovie = async (moviePayload) => {
		try{
			const movieCreated = await MovieRepository.createMovie(moviePayload);
			if (!movieCreated) {
				return serviceResult({ ...formatMessage(Errors.movie.failedCreate) }, true);
			}
			return serviceResult({ movie: movieCreated, ...formatMessage(Success.movie.created) });
		} catch (error) {
			return serviceResult({ error, ...formatMessage(Errors.movie.failedCreate) }, true);
		};
	};

	static updateMovie = async (movie, movieId) => {
		try {
			const movieUpdated = await MovieRepository.updateMovie(movie, movieId);
			if (!movieUpdated) {
				return serviceResult({ ...formatMessage(Errors.movie.failedUpdate) }, true);
			}
			return serviceResult({ movie: movieUpdated, ...formatMessage(Success.movie.updated) });
		} catch (error) {
			return serviceResult({ error, ...formatMessage(Errors.movie.failedUpdate) }, true);
		};
	};

	static deleteMovie = async (movieId) => {
		try{
			const movieDeleted = await MovieRepository.deleteMovie(movieId);
			if (!movieDeleted) {
				return serviceResult({ ...formatMessage(Errors.movie.failedDelete) }, true);
			}
			return serviceResult({ movie: movieDeleted, ...formatMessage(Success.movie.deleted) });
		} catch (error) {
			return serviceResult({ error, ...formatMessage(Errors.movie.failedDelete) }, true);
		};
	};

}

module.exports = MovieService;
