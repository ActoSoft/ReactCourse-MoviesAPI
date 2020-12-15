const { HttpCodes } = require('../constants');

module.exports = (
	data,
	hasError = false,
	statusCode = hasError ? HttpCodes.serverError : HttpCodes.success
) => {
	return { hasError, data, statusCode };
}