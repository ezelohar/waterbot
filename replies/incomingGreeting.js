const TEMPLATES = require('../constants/replies');
const config = require('config');
// randomize messages
module.exports = [
	{
		text: 'Hey, thank you for asking. Not bad. I have seen better days but still what to do',
	},
	{
		text: 'But i must say that my cat is excellent.',
	},
	{
		attachment: {
			type: 'image',
			payload: {
				attachment_id: config.get('facebook.attachments.cat'),
			},
		},
	},
	{
		text: 'See, she rulez :p',
	},
	{
		text: 'Anyway, you are not here to talk about me or my cat :). Tell me how many cups of water do you drink a day?',
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
	}
];

