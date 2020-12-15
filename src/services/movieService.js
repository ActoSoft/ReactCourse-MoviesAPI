const { MovieRepository } = require('../repositories');
const { serviceResult } = require('../utils');

class MovieService {

	static getAll = async () => {
		try {
			const movies = await MovieRepository.getMovies();
			if (!movies) {
				return serviceResult('Something failed at getting the movies', true);
			}
			return serviceResult(movies);
		} catch (error) {
			return serviceResult('Something failed at getting the movies', true);
		};
	};

	static createMovie = async (moviePayload) => {
		try{
			const movieCreated = await MovieRepository.createMovie(moviePayload);
			if (!movieCreated) {
				return serviceResult('Something failed at creating the movie', true);
			}
			return serviceResult({movieCreated, message: 'The movie was created succesfully'});
		} catch {
			return serviceResult('Something failed at creating the movie', true);
		}
	};

}

module.exports = MovieService;
