const BaseError = require('./');

class NotImplementedError extends BaseError {
	constructor(message = 'Not Implemented', description) {
		super(message, description);

		this.code = 501;
	}
}

module.exports = NotImplementedError;
