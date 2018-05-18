const config = require('config');

class BaseError extends Error {
	constructor(message, description) {
		super(message);

		this.message = message;
		this.description = description;

		if (config.get('application.errors.stack')) {
			Error.captureStackTrace(this, this.constructor);
		}
	}

	toJSON() {
		const error = {
			code: this.code,
			message: this.message,
			description: this.description,
			stack: (this.stack || '').split('\n'),
		};
		if (!config.get('application.errors.stack')) {
			delete error.stack;
		}
		return error;
	}
}

BaseError.stackTraceLimit = 100;

module.exports = BaseError;
