const config = require('config');
const request = require('request-promise-native');

class Facebook {
	constructor(accessToken, graphURL) {
		this.accessToken = accessToken || config.get('facebook.pageAccessToken');
		this.graphURL = graphURL || config.get('facebook.graphURL');
	}

	buildBody(url, data, qs = {}, method = 'POST') {
		return this.build(url, data, qs, method, true);
	}

	buildJson(url, data, qs = {}, method = 'POST') {
		return this.build(url, data, qs, method);
	}

	// Not sure if this is cover all cases, i need more time to read whole messenger documentation
	build(url, data, qs, method = 'POST', isBody = false) {
		const requestObject = {
			uri: `${this.graphURL}${url}`,
			qs: {
				...qs,
				...{
					access_token: this.accessToken,
				},
			},
			method,
		};

		if (method !== 'GET') {
			if (isBody) {
				requestObject.json = data;
			} else {
				requestObject.json = true;
				requestObject.body = data;
			}
		}

		return requestObject;
	}

	request(requestObject) {
		return request(requestObject);
	}

	/* **** ACTIONS **** */

	/**
	 * Send a message to the receiver
	 * @param receiverId
	 * @param message
	 * @returns {*}
	 */
	sendMessage(receiverId, message) {
		const requestBody = {
			recipient: {
				id: receiverId,
			},
			message,
		};

		return this.request(this.buildJson('me/messages', requestBody));
	}

	addAttachment(attachment) {
		return this.request(this.buildBody('me/message_attachments', attachment));
	}

	/**
	 * Enable get started for facebook messenger
	 * @param payload
	 * @returns {*}
	 */
	addGetStarted(payload) {
		const data = {
			setting_type: 'call_to_actions',
			thread_state: 'new_thread',
			call_to_actions: [
				{
					payload,
				},
			],
		};
		return this.request(this.buildBody('me/thread_settings', data));
	}

	/**
	 * Remove get started for facebook messenger
	 * @returns {*}
	 */
	removeGetStarted() {
		const data = {
			setting_type: 'call_to_actions',
			thread_state: 'new_thread',
		};
		return this.request(this.buildBody('me/thread_settings', data, 'DELETE'));
	}

	addPersistentMenu(menu) {
		return this.request(this.buildBody('me/messenger_profile', menu));
	}

	/**
	 * Return a name of the sender
	 * @param senderId
	 * @returns {*}
	 */
	async getSenderData(senderId, fields) {
		const qs = {
			fields: fields.join(', '),
		};
		const name = await this.request(this.build(senderId, {}, qs, 'GET'));
		return JSON.parse(name);
	}
}

module.exports = Facebook;
