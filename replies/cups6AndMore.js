const TEMPLATES = require('../constants/replies');
const config = require('config');

module.exports = [
	{
		attachment: {
			type: 'image',
			payload: {
				attachment_id: config.get('facebook.attachments.image3'),
			},
		},
	},
	{
		text: 'Your\'e a real champ 🥂 8 cups is the recommended amount.',
	},
	{
		text: 'Set a daily reminder to keep track with your good work',
		quick_replies: [
			{
				content_type: 'text',
				title: 'Once a day ☝️',
				payload: TEMPLATES.CONFIRMED_FREQUENCY_6_AND_MORE,
			},
		],
	},
];
