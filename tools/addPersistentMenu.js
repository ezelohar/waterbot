const Facebook = require('../core/libs/facebook');
const {
	log,
} = require('../core/libs/log');

const REPLIES = require('../constants/replies');

const facebook = new Facebook();

const menu = {
	persistent_menu: [
		{
			locale: 'default',
			composer_input_disabled: false,
			call_to_actions: [
				{
					title: 'Start',
					type: 'postback',
					payload: REPLIES.GET_STARTED,
				},
				{
					title: 'More',
					type: 'nested',
					call_to_actions: [
						{
							title: 'Reminder Frequency',
							type: 'postback',
							payload: REPLIES.CHANGE_FREQUENCY,
						},
						{
							type: 'web_url',
							title: 'Google.com',
							url: 'https://www.google.com/',
							webview_height_ratio: 'full',
						},
					],
				},
			],
		},
	],
};

(async () => {
	try {
		const requestResponse = await facebook.addPersistentMenu(menu);
		log('Greeting added');
		log(requestResponse);
	} catch (error) {
		log(error);
	}
})();
