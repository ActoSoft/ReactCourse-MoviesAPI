class BaseController {

	static returnResponse = (result, res) => {
		return res.status(result.statusCode).json({ data: result.data })
	};

};

module.exports = BaseController;
