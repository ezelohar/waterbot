const BaseError = require('./');

class NotFoundError extends BaseError {
	constructor(message = 'Not Found', description) {
		super(message, description);

		this.code = 404;
	}
}

module.exports = NotFoundError;
