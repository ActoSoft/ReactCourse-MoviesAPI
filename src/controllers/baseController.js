const { HttpCodes, Errors } = require("../constants");

class BaseController {

	static returnValidatorResultError = (validatorResult, res) => {
    return res.status(HttpCodes.badRequest).json({
      message: Errors.validator.badRequest,
      errors: validatorResult.errors
    });
  };

	static returnResponse = (result, res) => {
		return res.status(result.statusCode).json({ data: result.data })
	};

};

module.exports = BaseController;
