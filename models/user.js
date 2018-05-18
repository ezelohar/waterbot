const Sequelize = require('sequelize');
const sequelize = require('../core/database/postgresql');
const Facebook = require('../core/libs/facebook');

const FacebookInstance = new Facebook();

/**
 * @namespace User
 * @class
 */
const User = sequelize.define(
	'user',
	{
		id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true,
		},
		facebookId: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: 'userUniqueFacebookIdReference',
		},
		firstName: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		lastName: {
			type: Sequelize.STRING,
			allowNull: true,
		},
	},
);

User.createUserOrFetch = async (facebookId) => {
	const user = await User.findOne({
		where: {
			facebookId,
		},
	});

	if (user) {
		return user;
	}

	const {
		first_name: firstName,
		last_name: lastName,
	} = await FacebookInstance.getSenderName(facebookId);

	return User.create({
		facebookId,
		firstName,
		lastName,
	});
};

/**
 * @memberOf User
 */
module.exports = User;
