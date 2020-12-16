const { Movie } = require('../models');

class MovieRepository {

	static getMovies = async () => {
		return Movie
			.find()
			.sort('title')
			.select({characters: 0})
			.then(movies => movies)
			.catch(error => error)
	};

	static getMovie = async (movieId) => {
		return Movie
			.findById(movieId)
			.then(movie => movie)
			.catch(error => error)
	};

	static createMovie = async (movie) => {
		const newMovie = new Movie(movie);
		return newMovie
			.save()
			.then(movie => movie)
			.catch(error => error);
	};

	static updateMovie = async (movie, movieId) => {
		return Movie
			.findOneAndUpdate({_id: movieId}, movie, {new: true})
			.then(movie => movie)
			.catch(error => error)
	};

	static deleteMovie = async (movieId) => {
		return Movie
			.deleteOne({ _id: movieId })
			.then(movie => movie)
			.catch(error => error)
	};

};

module.exports = MovieRepository;
