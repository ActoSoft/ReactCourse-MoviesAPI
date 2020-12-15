const Joi = require('@hapi/joi');
const { Errors } = require('../constants');
const validators = require('./requests');

const joiValidator = (schema, data) => {
  const result = schema.validate(data, {
    abortEarly: false
  });
  if (result.error) {
    return {
      hasError: true,
      errors: result.error.details.map(detail => {
        return detail.message
      })
    };
  };
  return { hasError: false };
}

const validateRequest = (type, data) => {
  if (type in validators) {
    return joiValidator(validators[type], data);
  };
  return {
    hasError: true,
    errors: [Errors.validator.notExist]
  };
};

module.exports = validateRequest;
