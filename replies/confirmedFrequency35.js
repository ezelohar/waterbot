const REPLIES = require('../constants/replies');

module.exports = () => [
	{
		text: 'Noted 🙂',
	},
	{
		text: 'Let\'s give it a try now, drink 1 cup of water and press the button\n',
		quick_replies: [
			{
				content_type: 'text',
				title: 'Done️',
				payload: `${REPLIES.DONE},,1`,
			},
		],
	},
];
