const Joi = require('@hapi/joi');

const schema = Joi.object({
	_id: Joi.string().required(),
	name: Joi.string().optional(),
	img: Joi.string().optional(),
	biography: Joi.string().optional()
});

module.exports = schema;
