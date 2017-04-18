/* eslint-env node */

const http = require('http');
const {endPoint, routes} = require('./config');

module.exports = {

    buildApiRoute (path) {
        if (path.indexOf('/') !== 0) {
            path = '/' + path;
        }
        return '/api' + path;
    },

    httpRequest (path = '', method = '', callback) {
        const options = {
            host: endPoint,
            path,
            method
        };

        http.request(options, function (response) {
            let responseBody = '';

            response.on('data', function (data) {
                responseBody += data;
            });
            response.on('end', function () {
                callback(responseBody);
            });
            response.on('error', function (e) {
                callback(new Error(500));
                throw e;
            });
        }).end();
    },

    createAction (route) {
        return (req, res) => {
            this.httpRequest(routes[route](req.params, req.query), req.method, function (response) {
                res(response);
            });
        };
    },

    createRoutes (methods, path, route) {
        return methods.map(method => ({
            method,
            path: this.buildApiRoute(path),
            handler: this.createAction(route)
        }));
    }

};
