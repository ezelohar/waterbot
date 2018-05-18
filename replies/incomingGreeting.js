const config = require('config');

const cupsQuickReply = require('./shared/cupsQuickReply');

// randomize messages
module.exports = () => [
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
		quick_replies: cupsQuickReply,
	},
];

