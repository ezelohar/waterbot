const REPLIES = require('../constants/replies');
const {
	REMINDERS,
} = require('../constants/global');

module.exports = () => [
	{
		text: 'Changing frequency is super easy. Select new frequency:',
		quick_replies: [
			{
				content_type: 'text',
				title: 'Once a day ☝️',
				payload: `${REPLIES.FREQUENCY_CHANGED},${REMINDERS.FREQUENCY.ONCE_A_DAY}`,
			},
			{
				content_type: 'text',
				title: 'Twice a day ✌️',
				payload: `${REPLIES.FREQUENCY_CHANGED},${REMINDERS.FREQUENCY.TWICE_A_DAY}`,
			},
			{
				content_type: 'text',
				title: '3 times a day 🙌',
				payload: `${REPLIES.FREQUENCY_CHANGED},${REMINDERS.FREQUENCY.THREE_TIMES_A_DAY}`,
			},
			{
				content_type: 'text',
				title: 'Stop Reminders',
				payload: `${REPLIES.FREQUENCY_CHANGED},${REMINDERS.FREQUENCY.OFF}`,
			},
		],
	},
];
