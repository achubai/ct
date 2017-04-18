/* eslint-env node */

const Hapi = require('hapi');
const {connection} = require('./config');
const routes = require('./routes');
const server = new Hapi.Server();

server.connection({
    port: connection.port,
    host: connection.host,
    routes: {
        cors: true
    }
});

server.route(routes);

server.start((err) => {
    if (err) {
        console.error( err ); // eslint-disable-line
    }
    console.log(`Server started at ${server.info.uri}`) // eslint-disable-line
});
