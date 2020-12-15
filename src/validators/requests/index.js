const createMovieValidator = require('./movie/create');
const updateMovieValidator = require('./movie/update');
const createCharacterValidator = require('./character/create');
const updateCharacterValidator = require('./character/update');

const validators = {
	createMovieValidator,
	updateMovieValidator,
	createCharacterValidator,
	updateCharacterValidator,
};

module.exports = validators;
