const Facebook = require('../core/libs/facebook');
const {
	log,
} = require('../core/libs/log');

const {
	PAYLOADS,
} = require('../constants/global');

const facebook = new Facebook();

(async () => {
	try {
		const requestResponse = await facebook.addGetStarted(PAYLOADS.GET_STARTED_PAYLOAD);
		log('Greeting added');
		log(requestResponse);
	} catch (error) {
		log(error);
	}
})();
