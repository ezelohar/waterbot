const BaseError = require('./');

class ServiceUnavailableError extends BaseError {
	constructor(message = 'Service Unavailable', description) {
		super(message, description);

		this.code = 503;
	}
}

module.exports = ServiceUnavailableError;
