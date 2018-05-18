const REPLIES = require('../constants/replies');

module.exports = user => [
	{
		text: `Hi ${user.firstName} ${user.lastName} I will be your personal water trainer :) you can call me Woty 💧`,
	},
	{
		text: 'What I can do for you? \n' +
			'\n' +
			'☑  Daily water reminders \n' +
			'☑  Personalized AI recommendations \n' +
			'☑  Number of cups of water drank this week \n' +
			'☑  Tips about water drinking',
		quick_replies: [
			{
				content_type: 'text',
				title: 'Let\'s Start 🙌',
				payload: REPLIES.LETS_START,
			},
		],
	},
];
