const BaseError = require('./');

class TimeoutError extends BaseError {
	constructor(message = 'Timeout', description) {
		super(message, description);

		this.code = 408;
	}
}

module.exports = TimeoutError;
