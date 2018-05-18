const TEMPLATES = require('../constants/replies');

module.exports = [
	{
		text: 'Before we begin...',
	},
	{
		text: 'How many cups of water do you drink a day?',
		quick_replies: [
			{
				content_type: 'text',
				title: '1-2 cups',
				payload: TEMPLATES.CUPS_1_2,
			},
			{
				content_type: 'text',
				title: '3-5 cups',
				payload: TEMPLATES.CUPS_3_5,
			},
			{
				content_type: 'text',
				title: '6 and more',
				payload: TEMPLATES.CUPS_6_AND_MORE,
			},
			{
				content_type: 'text',
				title: 'I don\'t count',
				payload: TEMPLATES.CUPS_DO_NOT_COUNT,
			},
		],
	},
];
