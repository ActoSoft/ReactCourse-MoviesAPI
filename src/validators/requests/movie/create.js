const Joi = require('@hapi/joi');
const characterSchema = require('../character/create');

const schema = Joi.object({
	_id: Joi.string().allow('').allow(null).optional(),
	title: Joi.string().required(),
	img: Joi.string().required(),
	description: Joi.string().optional(),
	durationMinutes: Joi.number().optional(),
	characters: Joi.array().items(characterSchema).optional(),
});

module.exports = schema;
