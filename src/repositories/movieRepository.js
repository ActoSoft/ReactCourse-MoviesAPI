const { Movie } = require('../models');

class MovieRepository {

	static getMovies = async () => {
		return Movie
			.find()
			.sort('title')
			.then(movies => movies)
			.catch(error => error)
	};

	static createMovie = async (movie) => {
		const newMovie = new Movie(movie);
		return newMovie
			.save()
			.then(movie => movie)
			.catch(error => error);
	};

};

module.exports = MovieRepository;
