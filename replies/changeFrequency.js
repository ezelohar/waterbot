const TEMPLATES = require('../constants/replies');

module.exports = () => [
	{
		text: 'Changing frequency is super easy. Select new frequency:',
		quick_replies: [
			{
				content_type: 'text',
				title: 'Once a day ☝️',
				payload: TEMPLATES.FREQUENCY_CHANGED,
			},
			{
				content_type: 'text',
				title: 'Twice a day ✌️',
				payload: TEMPLATES.FREQUENCY_CHANGED,
			},
			{
				content_type: 'text',
				title: '3 times a day 🙌',
				payload: TEMPLATES.FREQUENCY_CHANGED,
			},
			{
				content_type: 'text',
				title: 'Stop Reminders',
				payload: TEMPLATES.FREQUENCY_CHANGED,
			},
		],
	},
];
