const REPLIES = require('../constants/replies');

module.exports = user => [
	{
		text: `So how many glasses of water have you drank today ${user.firstName} ${user.lastName}?`,
		quick_replies: [
			{
				content_type: 'text',
				title: '1-2 cups',
				payload: `${REPLIES.UPDATE_PROGRESS},,2`,
			},
			{
				content_type: 'text',
				title: '3-5 cups',
				payload: `${REPLIES.UPDATE_PROGRESS},,5`,
			},
			{
				content_type: 'text',
				title: '6-8 or more',
				payload: `${REPLIES.UPDATE_PROGRESS},,8`,
			},
		],
	},
];
