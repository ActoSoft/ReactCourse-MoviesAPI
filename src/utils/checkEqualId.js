const checkEqualId = (paramsValue, body) => {
	return paramsValue === body._id;
};

module.exports = checkEqualId;
