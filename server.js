'use strict';

let cfg = require('node-config-manager');

cfg.init({ camelCase: true });

const config = cfg
    .addConfig('server')
    .getConfig('server');

let express = require('express'),
    bodyParser = require('body-parser'),
    bunyan = require('bunyan'),
    log = bunyan.createLogger({
        name: config.name,
        streams: [{ stream: process.stdout }]
    });

const mongoose = require('mongoose'),
    PORT = process.env.PORT || config.port || 3000;

// Register models
require('./models/Hotel');

// Connect to Database
mongoose.Promise = global.Promise;
mongoose.connect(config.Mongo.URI);

// Create app
const app = express();
app.use(bodyParser.json());

// Allow origin
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

log.info(`${config.name} service started`);

// Register routes
require('./routes/hotelRoutes')(app);

exports.start = function() {
    app.listen(PORT, () => {
        log.info(`Listening on port ${PORT}`);
    });
};
