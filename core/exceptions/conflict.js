const BaseError = require('./');

class ConflictError extends BaseError {
	constructor(message = 'Conflict', description) {
		super(message, description);

		this.code = 409;
	}
}

module.exports = ConflictError;
