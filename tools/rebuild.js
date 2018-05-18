const models = require('../core/models');
const {
	log,
} = require('../core/libs/log');

models.sequelize.sync({
	force: true,
}).then(() => {
	log('Models have been rebuilt, database is empty. You can start new and fresh');
	process.exit(0);
});
