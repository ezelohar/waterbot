const TEMPLATES = require('./replies');

module.exports = {
	PAYLOADS: {
		GET_STARTED_PAYLOAD: TEMPLATES.GET_STARTED,
	},
	REMINDERS: {
		FREQUENCY: {
			ONCE_A_DAY: 1,
			TWICE_A_DAY: 2,
			THREE_TIMES_A_DAY: 3,
			OFF: 0,
		},
		FREQUENCY_HOURS_GROUP: {
			1: [14],
			2: [8, 20],
			3: [8, 14, 20],
		},
		DAILY_UPDATE_REMINDER_HOURS: 22,
		TYPES: {
			WEEKLY: 'weekly',
			DAILY: 'daily',
		},
		SUBTYPE: {
			INFO: 'info',
			CALL_TO_ACTION: 'callToAction',
		},
		REPLIES: {
			8: 'drinkWaterReminderMorning',
			14: 'drinkWaterReminderNoon',
			20: 'drinkWaterReminderEvening',
		},
	},
};
