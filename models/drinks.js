const Sequelize = require('sequelize');
const sequelize = require('../core/database/postgresql');

/**
 * @namespace Drinks
 * @class
 */
const Drinks = sequelize.define(
	'drinks',
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
		amount: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	},
);

Drinks.associate = (models) => {
	const {
		User,
	} = models;

	Drinks.belongsTo(User);
	User.hasMany(Drinks);
};


/**
 * @memberOf Drinks
 */
module.exports = Drinks;
