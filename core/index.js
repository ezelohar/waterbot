const config = require('config');
const express = require('express');
const http = require('http');
const cluster = require('cluster');
const os = require('os');
const bodyParser = require('body-parser');
const glob = require('glob');
const path = require('path');

const {
	log,
} = require('./libs/log');

// Errors
const InternalServerError = require('./exceptions/internalserver');

const app = express();

let server = null;

const numCPUs = config.get('application.cluster.cpus') || os.cpus().length;
function initMaster() {
	require('./models'); // eslint-disable-line

	for (let i = 0; i < numCPUs; i += 1) {
		cluster.fork();
	}
}

function initWorker() {
	app.set('trust proxy', true);
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true,
	}));

	if (config.get('application.protocol') === 'http') {
		server = http.createServer(app);
	} else {
		// @TODO implement https
	}

	glob('**/*.js', {
		cwd: path.resolve(`${__dirname}/../controllers/`),
	}, (err, files) => {
		files.forEach((file) => {
			const split = file.split('/');
			const controller = require(`${__dirname}/../controllers/${file}`); // eslint-disable-line
			if (typeof controller === 'function') {
				app.use(`/${split[0]}`, controller);
			}
		});

		server.listen(config.get('application.port'), config.get('application.host'), () => {
			log(`Worker ${process.pid} Listening on ${config.get('application.host')}:${config.get('application.port')}`);
		});
	});
}

if (cluster.isMaster) {
	initMaster();

	cluster.on('exit', (worker, code, signal) => {
		log(new InternalServerError(`Worker ${worker.process.pid} died, with code: ${code} and signal: ${signal}`));
		cluster.fork();
	});
} else {
	initWorker();
}
