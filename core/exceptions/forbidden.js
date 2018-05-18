const BaseError = require('./');

class ForbiddenError extends BaseError {
	constructor(message = 'Forbidden', description) {
		super(message, description);

		this.code = 403;
	}
}

module.exports = ForbiddenError;
