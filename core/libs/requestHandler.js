const {
	log,
} = require('../libs/log');
const Facebook = require('../libs/facebook');
const REPLIES = require('../../constants/replies');
const replies = require('../replies');

const {
	User,
} = require('../models');

const FacebookInstance = new Facebook();

class RequestHandler {
	async processRequest(entry) {
		const webhookEvent = entry.messaging[0];
		const senderId = webhookEvent.sender.id;

		// Create or fetch our local user
		const user = await User.createUserOrFetch(senderId);
		//

		log(webhookEvent);

		let response;
		if (webhookEvent.message) {
			if (webhookEvent.message.quick_reply) {
				response = await this.handlePostback(webhookEvent.message.quick_reply);
			} else {
				response = await this.handleMessage(webhookEvent.message, user);
			}
		} else {
			response = await this.handlePostback(webhookEvent.postback);
		}

		for (let i = 0; i < response.length; i += 1) {
			await FacebookInstance.sendMessage(senderId, response[i]);
		}

		return response.length;
	}

	async handleMessage(entry, user) {
		const response = [];
		if (entry.nlp && entry.nlp.entities.intent) {
			const {
				intent,
			} = entry.nlp.entities;
			const highestConfidenceIntent = intent.sort((a, b) => {
				if (a.confidence > b.confidence) {
					return -1;
				}
				if (a.confidence < b.confidence) {
					return 1;
				}
				return 0;
			});
			if (highestConfidenceIntent[0].confidence > 0.9) {
				return replies(highestConfidenceIntent[0].value, user)
			}
		}

		return [];

		if (response.length === 0) {
			try {
				response.push({
					text: `Sorry ${user.firstName} ${user.lastName}. I am a young WaterBot and still learning. Type "Start" to show the start over`,
				});
			} catch (error) {
				log(error);
			}
		}

		return response;
	}

	async handlePostback(entry, user) {
		return replies(entry.payload, user);
	}

	getDefaultReply(user) {
		return replies(REPLIES.NOT_FOUND, user);
	}
}

module.exports = new RequestHandler();

