const REPLIES = require('../../constants/replies');

module.exports = [
	{
		content_type: 'text',
		title: '1-2 cups',
		payload: REPLIES.CUPS_1_2,
	},
	{
		content_type: 'text',
		title: '3-5 cups',
		payload: REPLIES.CUPS_3_5,
	},
	{
		content_type: 'text',
		title: '6 and more',
		payload: REPLIES.CUPS_6_AND_MORE,
	},
	{
		content_type: 'text',
		title: 'I don\'t count',
		payload: REPLIES.CUPS_DO_NOT_COUNT,
	},
];
