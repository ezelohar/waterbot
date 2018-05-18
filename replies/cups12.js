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
				payload: `${REPLIES.CONFIRMED_FREQUENCY_1_2}, ${REMINDERS.FREQUENCY.ONCE_A_DAY}`,
			},
			{
				content_type: 'text',
				title: 'Twice a day ✌️',
				payload: `${REPLIES.CONFIRMED_FREQUENCY_1_2}, ${REMINDERS.FREQUENCY.TWICE_A_DAY}`,
			},
			{
				content_type: 'text',
				title: '3 times a day 🙌',
				payload: `${REPLIES.CONFIRMED_FREQUENCY_1_2}, ${REMINDERS.FREQUENCY.THREE_TIMES_A_DAY}`,
			},
		],
	},
];
