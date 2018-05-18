const glob = require('glob');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('./database/postgresql');

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}


const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

const models = glob.sync('**/*.js', {
	cwd: path.resolve(`${__dirname}/../models/`),
});


for (let i = 0; i < models.length; i += 1) {
	const model = models[i];
	const requiredModel = require(`${__dirname}/../models/${model}`); // eslint-disable-line
	db[capitalizeFirstLetter(requiredModel.name)] = requiredModel;
}

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

module.exports = db;
