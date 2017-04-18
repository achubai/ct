/* eslint-env node */

const helper = require('./helper');

module.exports = [
    ...helper.createRoutes(['GET', 'POST'], '/users/', 'users'),
    ...helper.createRoutes(['GET', 'PUT', 'DELETE'], '/users/{user}', 'users'),

    ...helper.createRoutes(['GET', 'POST'], '/albums/', 'albums'),
    ...helper.createRoutes(['GET', 'PUT', 'DELETE'], '/albums/{album}', 'albums'),

    ...helper.createRoutes(['GET', 'POST'], '/photos/', 'photos'),
    ...helper.createRoutes(['GET', 'PUT', 'DELETE'], '/photos/{photo}', 'photos'),


    ...helper.createRoutes(['GET'], '/postsSearch/{word}', 'postsSearch')
];
