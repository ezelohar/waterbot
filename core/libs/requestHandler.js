const Facebook = require('../libs/facebook');
const REPLIES = require('../../constants/replies');
const replies = require('../replies');

const {
	log,
} = require('./log');

const {
	User,
	Reminder,
	Drinks,
} = require('../models');

const FacebookInstance = new Facebook();

class RequestHandler {
	async processRequest(entry) {
		const webhookEvent = entry.messaging[0];
		const senderId = webhookEvent.sender.id;

		// Create or fetch our local user
		const user = await User.createUserOrFetch(senderId, webhookEvent.timestamp);


		let response = [];
		if (webhookEvent.message) {
			if (webhookEvent.message.quick_reply) {
				response = await this.handleCommand(webhookEvent.message.quick_reply, user);
			} else {
				response = await this.handleMessage(webhookEvent.message, user);
			}
		} else {
			response = await this.handleCommand(webhookEvent.postback, user);
		}

		if (response.length === 0) {
			response = this.getDefaultReply(user);
		}

		this.sendResponses(senderId, response);

		return response.length;
	}

	async handleMessage(entry, user) {
		if (entry.nlp && entry.nlp.entities.intent) {
			const {
				intent,
			} = entry.nlp.entities;
			const highestConfidenceIntent = intent.sort((a, b) => a - b);

			if (highestConfidenceIntent[0].confidence > 0.8) {
				return this.handleCommand({
					payload: highestConfidenceIntent[0].value,
				}, user);
			}
		}

		return [];
	}

	async handleCommand(entry, user) {
		const [payload, frequency = '', cups = ''] = entry.payload.split(',');

		if (frequency.length > 0) {
			await Reminder.setReminders(user, parseInt(frequency, 10));
		}

		if (cups.length > 0) {
			await Drinks.create({
				userId: user.id,
				amount: parseInt(cups, 10),
			});
		}

		return replies(payload, user);
	}

	getDefaultReply(user) {
		return replies(REPLIES.NOT_FOUND, user);
	}

	async sendResponses(senderId, responses) {
		for (let i = 0; i < responses.length; i += 1) {
			await FacebookInstance.sendMessage(senderId, responses[i]); // eslint-disable-line
		}
	}
}

module.exports = new RequestHandler();

