const express = require('express');
const config = require('config');
const {
	log,
} = require('../../core/libs/log');

const RequestHandler = require('../../core/libs/requestHandler');

const ForbiddenError = require('../../core/exceptions/forbidden');
const BadRequest = require('../../core/exceptions/badrequest');
const NotFoundError = require('../../core/exceptions/notfound');

const Webhook = express.Router();

Webhook.post('/webhook', async (req, res) => {
	try {
		const {
			body,
		} = req;
		if (body.object === 'page') {
			// Iterate over each entry - there may be multiple if batched
			const proccessedEntries = body.entry.map(entry => RequestHandler.processRequest(entry));
			await Promise.all(proccessedEntries);

			// Return a '200 OK' response to all events
			return res.status(200).send('EVENT_RECEIVED');
		}

		throw new NotFoundError();
	} catch (error) {
		log(error);
		return res.sendStatus(error.code);
	}
});

Webhook.get('/webhook', async (req, res) => {
	try {
		const verificationToken = config.get('facebook.verificationToken');

		const {
			'hub.mode': mode,
			'hub.verify_token': token,
			'hub.challenge': challenge,
		} = req.query;

		if (mode && token) {
			if (mode === 'subscribe' && token === verificationToken) {
				log('WEBHOOK_VERIFIED');
				return res.status(200).send(challenge);
			}
			throw new ForbiddenError();
		}

		throw new BadRequest();
	} catch (error) {
		log(error);
		return res.sendStatus(error.code);
	}
});


module.exports = Webhook;
