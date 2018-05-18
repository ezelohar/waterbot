const TEMPLATES = require('../constants/replies');

module.exports = [
	{
		text: 'The recommended amount of water per day is eight 8-ounce glasses, which equals about 2 liters, or half a gallon.',
	},
	{
		text: 'Choose the frequency for water break reminders',
		quick_replies: [
			{
				content_type: 'text',
				title: 'Once a day ☝️',
				payload: TEMPLATES.CONFIRMED_FREQUENCY,
			},
			{
				content_type: 'text',
				title: 'Twice a day ✌️',
				payload: TEMPLATES.CONFIRMED_FREQUENCY,
			},
			{
				content_type: 'text',
				title: '3 times a day 🙌',
				payload: TEMPLATES.CONFIRMED_FREQUENCY,
			},
		],
	},
];
