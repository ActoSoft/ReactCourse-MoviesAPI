const Joi = require('@hapi/joi');

const schema = Joi.object({
	_id: Joi.string().allow('').allow(null).optional(),
	name: Joi.string().required(),
	img: Joi.string().required(),
	biography: Joi.string().optional()
});

module.exports = schema;
