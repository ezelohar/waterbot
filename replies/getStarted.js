const TEMPLATES = require('../constants/replies');

module.exports = [
	{
		text: 'Hi {{name}} I will be your personal water trainer :) you can call me Woty 💧',
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
				payload: TEMPLATES.LETS_START,
			},
		],
	},
];
