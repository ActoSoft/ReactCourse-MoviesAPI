const convertToBase64 = (value) => {
	return Buffer.from(value, 'base64').toString();
}

module.exports = convertToBase64;
