require('dotenv').config();
const config = require('./config');
const restify = require('restify');
const restifyPlugins = require('restify-plugins');
const mongoose = require('mongoose'),
    recipe = require('./api/models/recipeModel'); //created model loading here

const server = restify.createServer({
    name: config.name,
    version: config.version,
});

server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser({ mapParams: true }));
server.use(restifyPlugins.fullResponse());

server.listen(config.port, () => {
    mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', (err) => {
        console.error(err);
        process.exit(1);
    });
    db.once('open', () => {
        require('./api/routes/recipeRoutes')(server);
        console.log(`API server is listening on port ${config.port}`);
    });
});