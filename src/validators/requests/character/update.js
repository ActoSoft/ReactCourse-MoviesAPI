const Joi = require('@hapi/joi');

const schema = Joi.object({
	_id: Joi.string().required(),
	name: Joi.string().required(),
	img: Joi.string().required(),
	biography: Joi.string().required(),
	createdAt: Joi.string().optional(),
	updatedAt: Joi.string().optional(),
});

module.exports = schema;
