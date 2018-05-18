const TEMPLATES = require('../constants/replies');

const templates = Object.values(TEMPLATES).reduce((result, currentValue) => {
	result[currentValue] = require(`./${currentValue}.js`);
	return result;
}, {});

module.exports = (template) => {
	// add data processing
	return templates[template] || [];
};
