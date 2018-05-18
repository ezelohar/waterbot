const BaseError = require('./');

class InternalServerError extends BaseError {
	constructor(message = 'Internal Server Error', description) {
		super(message, description);

		this.code = 500;
	}
}

module.exports = InternalServerError;
