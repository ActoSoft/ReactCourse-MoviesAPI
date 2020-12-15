const Joi = require('@hapi/joi');
const characterSchema = require('../character/create');

const schema = Joi.object({
	_id: Joi.string().required(),
	title: Joi.string().optional(),
	img: Joi.string().optional(),
	description: Joi.string().optional(),
	durationMinutes: Joi.number().optional(),
	characters: Joi.array().items(characterSchema).optional(),
});

module.exports = schema;
