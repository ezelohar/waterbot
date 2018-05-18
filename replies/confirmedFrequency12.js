const REPLIES = require('../constants/replies');

module.exports = () => [
	{
		text: 'Noted 🙂 Let\'s give it a try now',
	},
	{
		text: 'Have 1 cup of water and press the button once done',
		quick_replies: [
			{
				content_type: 'text',
				title: 'Done️',
				payload: `${REPLIES.DONE},,1`,
			},
		],
	},
];
