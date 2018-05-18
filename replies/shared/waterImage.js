const config = require('config');

module.exports = {
	type: 'image',
	payload: {
		attachment_id: config.get('facebook.attachments.glass'),
	},
};
