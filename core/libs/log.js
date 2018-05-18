const util = require('util');

module.exports = {
	log(message) {
		// Errors can be logged to some service like raven, log file or pm2 keymetrics
		switch (true) {
		case typeof message === 'string': {
			console.log(message);
			break;
		}
		default: {
			console.log(util.inspect(message, false, null));
		}
		}
	},
};
