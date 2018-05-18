const TEMPLATES = require('../constants/replies');
const config = require('config');

module.exports = [
	{
		attachment: {
			type: 'image',
			payload: {
				attachment_id: config.get('facebook.attachments.image1'),
			},
		},
	},
	{
		text: 'The recommended amount of water per day is eight 8-ounce glasses, which equals about 2 liters, or half a gallon.',
	},
	{
		text: 'Choose the frequency for water break reminders',
		quick_replies: [
			{
				content_type: 'text',
				title: 'Once a day ☝️',
				payload: TEMPLATES.CONFIRMED_FREQUENCY_1_2,
			},
			{
				content_type: 'text',
				title: 'Twice a day ✌️',
				payload: TEMPLATES.CONFIRMED_FREQUENCY_1_2,
			},
			{
				content_type: 'text',
				title: '3 times a day 🙌',
				payload: TEMPLATES.CONFIRMED_FREQUENCY_1_2,
			},
		],
	},
];
