const Sequelize = require('sequelize');
const sequelize = require('../core/database/postgresql');

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
		timezone: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		frequency: {
			type: Sequelize.SMALLINT,
			allowNull: false,
			defaultValue: REMINDERS.OFF,
		},
	},
);

Reminder.associate = (models) => {
	const {
		User,
	} = models;

	Reminder.belongsTo(User);
	User.hasOne(Reminder);
};

/**
 * @memberOf User
 */
module.exports = Reminder;
