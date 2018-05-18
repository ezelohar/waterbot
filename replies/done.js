const config = require('config');

module.exports = user => [
	{
		attachment: {
			type: 'image',
			payload: {
				attachment_id: config.get('facebook.attachments.image3'),
			},
		},
	},
	{
		text: `Well done ${user.firstName} ${user.lastName}! Keep it up!`,
	},
	{
		text: 'You can always get to the menu by asking for "Menu" 🙂',
	},
];
