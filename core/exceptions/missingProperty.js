const BadRequest = require('./badrequest');

class MissingProperty extends BadRequest {
	constructor(message = 'Missing request property', description) {
		super(message, description);

		this.code = 400;
	}
}

module.exports = MissingProperty;
