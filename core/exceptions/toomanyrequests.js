const BaseError = require('./');

class TooManyRequestsError extends BaseError {
	constructor(message = 'Too Many Requests', description) {
		super(message, description);

		this.code = 429;
	}
}

module.exports = TooManyRequestsError;
