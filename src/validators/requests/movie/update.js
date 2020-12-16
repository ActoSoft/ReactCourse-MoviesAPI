const Joi = require('@hapi/joi');
const characterSchema = require('../character/update');

const schema = Joi.object({
	_id: Joi.string().required(),
	title: Joi.string().required(),
	img: Joi.string().required(),
	description: Joi.string().required(),
	durationMinutes: Joi.number().required(),
	characters: Joi.array().items(characterSchema).optional(),
	createdAt: Joi.string().optional(),
	updatedAt: Joi.string().optional(),
	__v: Joi.number().optional(),
});

module.exports = schema;
