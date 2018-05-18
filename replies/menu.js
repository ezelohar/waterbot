const TEMPLATES = require('../constants/replies');

module.exports = [
	{
		text: 'This is your menu. You can reach it by writing Menu/Help or Start 🙂',
		quick_replies: [
			{
				content_type: 'text',
				title: 'About WaterBot',
				payload: TEMPLATES.ABOUT,
			},
			{
				content_type: 'text',
				title: 'Change Alerts',
				payload: TEMPLATES.CHANGE_FREQUENCY,
			},
		],
	},
];

