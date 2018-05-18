const BaseError = require('./');

class UnprocessableEntity extends BaseError {
	constructor(message = 'Unprocessable Entity ', description) {
		super(message, description);

		this.code = 422;
	}
}

module.exports = UnprocessableEntity;
