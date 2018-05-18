const Facebook = require('../core/libs/facebook');
const {
	log,
} = require('../core/libs/log');

const facebook = new Facebook();

(async () => {
	try {
		const requestResponse = await facebook.removeGetStarted();
		log('Greeting removed');
		log(requestResponse);
	} catch (error) {
		log(error);
	}
})();
