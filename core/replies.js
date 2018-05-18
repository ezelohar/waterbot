const REPLIES = require('../constants/replies');

const replies = Object.values(REPLIES).reduce((result, currentValue) => {
	result[currentValue] = require(`../replies/${currentValue}.js`);
	return result;
}, {});

module.exports = (reply, user) => {
	// add data processing
	if (!replies[reply]) {
		return [];
	}
	return replies[reply](user);
};
