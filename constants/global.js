const TEMPLATES = require('./replies');

module.exports = {
	PAYLOADS: {
		GET_STARTED_PAYLOAD: TEMPLATES.GET_STARTED,
	},
	REMINDERS: {
		ONCE_A_DAY: 1,
		TWICE_A_DAY: 2,
		THREE_TIMES_A_DAY: 3,
		OFF: 0,
	},
};
