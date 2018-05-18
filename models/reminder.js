const Sequelize = require('sequelize');
const sequelize = require('../core/database/postgresql');

const {
	transformTimezoneToHours,
} = require('../core/libs/times');

const {
	REMINDERS,
} = require('../constants/global');

/**
 * @namespace Reminder
 * @class
 */
const Reminder = sequelize.define(
	'reminder',
	{
		id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true,
		},
		userId: {
			type: Sequelize.UUID,
			allowNull: false,
		},
		unit: {
			type: Sequelize.INTEGER,
		},
		type: {
			type: Sequelize.ENUM,
			values: Object.values(REMINDERS.TYPES),
			defaultValue: REMINDERS.TYPES.DAILY,
		},
		subType: {
			type: Sequelize.ENUM,
			values: Object.values(REMINDERS.SUBTYPE),
			defaultValue: REMINDERS.SUBTYPE.INFO,
		},
		reply: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	},
	{
		paranoid: false,
	}
);

Reminder.associate = (models) => {
	const {
		User,
	} = models;

	Reminder.belongsTo(User);
	User.hasMany(Reminder);
};


// Reminders will be sent ad 8 am, 2 pm, and 8pm.
// Daily summary will be sent at 10pm
Reminder.setReminders = async (user, frequency) => {
	// Clear previous reminders
	await Reminder.destroy({
		where: {
			userId: user.id,
		},
	});

	if (frequency !== REMINDERS.FREQUENCY.OFF) {
		// insert new reminders
		const hoursGroup = REMINDERS.FREQUENCY_HOURS_GROUP[frequency] || [];
		const promises = hoursGroup.map(hour => Reminder.create({
			userId: user.id,
			unit: transformTimezoneToHours(user.timezone, hour),
			type: REMINDERS.TYPES.DAILY,
			subType: REMINDERS.SUBTYPE.INFO,
			reply: REMINDERS.REPLIES[hour],
		}));

		// add daily update reminder
		promises.push(Reminder.create({
			userId: user.id,
			unit: transformTimezoneToHours(user.timezone, REMINDERS.DAILY_UPDATE_REMINDER_HOURS),
			type: REMINDERS.TYPES.DAILY,
			subType: REMINDERS.SUBTYPE.CALL_TO_ACTION,
			reply: 'updateWaterProgress',
		}));

		// add weekly info reminder
		promises.push(Reminder.create({
			userId: user.id,
			unit: 7,
			type: REMINDERS.TYPES.WEEKLY,
			subType: REMINDERS.SUBTYPE.INFO,
			reply: 'drinkWaterWeeklyUpdate',
		}));

		return Promise.all(promises);
	}

	return [];
};

/**
 * @memberOf User
 */
module.exports = Reminder;
