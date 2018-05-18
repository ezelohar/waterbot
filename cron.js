const cron = require('node-cron');
const moment = require('moment');

process.env.tz = 'utc';

const {
	REMINDERS,
} = require('./constants/global');

const RequestHandler = require('./core/libs/requestHandler');
const {
	Reminder,
	User,
} = require('./core/models');

async function sendDailyReminders(unit) {
	const users = await User.findAll({
		include: [
			{
				model: Reminder,
				where: {
					unit,
					type: REMINDERS.TYPES.DAILY,
				},
				required: true,
			},
		],
	});

	const finalReplies = [];
	for (let i = 0; i < users.length; i += 1) {
		const replies = await RequestHandler.handleCommand({ // eslint-disable-line
			payload: users[i].reminders[0].reply,
		}, users[i]);
		finalReplies.push(RequestHandler.sendResponses(users[i].facebookId, replies));
	}

	return Promise.all(finalReplies);
}

function getHour() {
	return parseInt(moment.utc().format('H'), 10);
}

cron.schedule('0 * * * *', async () => {
	sendDailyReminders(getHour()).then(() => {
		console.log(`I have send all reminders for hour: ${getHour()}`);
	});
});

sendDailyReminders(getHour());

// ADD WEEKLY REMINDERS
