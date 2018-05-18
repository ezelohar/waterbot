const config = require('config');

const REPLIES = require('../constants/replies');
const {
	REMINDERS,
} = require('../constants/global');

module.exports = () => [
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
				payload: `${REPLIES.CONFIRMED_FREQUENCY_6_AND_MORE}, ${REMINDERS.FREQUENCY.ONCE_A_DAY}`,
			},
		],
	},
];
