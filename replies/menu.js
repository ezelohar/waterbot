const REPLIES = require('../constants/replies');

module.exports = () => [
	{
		text: 'This is your menu. You can reach it by writing Menu/Help or Start 🙂',
		quick_replies: [
			{
				content_type: 'text',
				title: 'About WaterBot',
				payload: REPLIES.ABOUT,
			},
			{
				content_type: 'text',
				title: 'Change Alerts',
				payload: REPLIES.CHANGE_FREQUENCY,
			},
		],
	},
];

