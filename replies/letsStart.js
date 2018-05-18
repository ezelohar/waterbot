const cupsQuickReply = require('./shared/cupsQuickReply');

module.exports = () => [
	{
		text: 'Before we begin...',
	},
	{
		text: 'How many cups of water do you drink a day?',
		quick_replies: cupsQuickReply,
	},
];
