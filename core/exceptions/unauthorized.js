const BaseError = require('./');

class UnauthorizedError extends BaseError {
	constructor(message = 'Unauthorized', description) {
		super(message, description);

		this.code = 401;
	}
}

module.exports = UnauthorizedError;
