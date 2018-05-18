const BaseError = require('./');

class BadRequestError extends BaseError {
	constructor(message = 'Bad Request', description) {
		super(message, description);

		this.code = 400;
	}
}

module.exports = BadRequestError;
