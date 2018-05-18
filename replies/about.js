const TEMPLATES = require('../constants/replies');

module.exports = () => [
	{
		text: 'Thanks for asking 🙂',
	},
	{
		text: 'WaterBot was created by SPARTANS AI LTD. We build innovative AI driven products.'
	},
	{
		text: 'WaterBot\'s goal is to help you drink more water for a healthier life.',
	},
	{
		text: 'Daily water reminders \n' +
		'☑  Personalized AI recommendations \n' +
		'☑  Number of cups of water drank this week \n' +
		'☑  Tips about water drinking',
		quick_replies: [
			{
				content_type: 'text',
				title: 'Back️',
				payload: TEMPLATES.MENU,
			},
		],
	},
];
