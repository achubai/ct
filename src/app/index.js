import 'angular';
import 'angular-messages';
import 'highcharts-ng';
import uiRouter from 'angular-ui-router';

import toastr from 'angular-toastr';
import tabs from 'angular-ui-bootstrap/src/tabs/';
import modal from 'angular-ui-bootstrap/src/modal/';

import 'angular-toastr/dist/angular-toastr.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './static/styles/main.scss';
import 'highcharts-ng/dist/highcharts-ng.css';

import components from './components';
import constants from './constants';
import repositories from './repositories';
import services from './services';


angular.module('app', [
    'ngMessages',
    'highcharts-ng',
    uiRouter,

    toastr,
    tabs,
    modal,

    constants,
    components,
    repositories,
    services

]).config(function ($stateProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false);

    $stateProvider
        .state('main', {
            url: '',
            component: 'main',
            redirectTo: 'main.users'
        })
        .state('main.users', {
            url: '/users',
            component: 'users',
            redirectTo: 'main.users.charts'
        })
        .state('main.users.charts', {
            url: '/charts',
            resolve: {
                data: ['usersService', (usersService) => {
                    return usersService.fetchUsers({embed: 'albums'});
                }]
            },
            views: {
                content: {
                    component: 'charts'
                }
            }
        })
        .state('main.users.user', {
            url: '/info/:id',
            resolve: {
                user: ['$stateParams', 'usersService', ($stateParams, usersService) => {
                    return usersService.fetchUser($stateParams.id, {embed: 'albums'});
                }]
            },
            views: {
                content: {
                    component: 'userTabs'
                }
            }
        })
        .state('main.users.create', {
            url: '/create',
            views: {
                content: {
                    component: 'userInfo'
                }
            },
            resolve: {
                create: () => true
            }
        })
        .state('main.albums', {
            url: '/albums',
            component: 'albums',
            redirectTo: 'main.albums.charts'
        })
        .state('main.albums.charts', {
            url: '/charts',
            resolve: {
                data: ['albumsService', (usersService) => {
                    return usersService.fetchAlbums({embed: 'photos'});
                }]
            },
            views: {
                content: {
                    component: 'charts'
                }
            }
        })
        .state('main.albums.album', {
            url: '/info/:id',
            resolve: {
                album: ['$stateParams', 'albumsService', ($stateParams, albumsService) => {
                    return albumsService.fetchAlbum($stateParams.id, {embed: 'photos'});
                }]
            },
            views: {
                content: {
                    component: 'albumsTabs'
                }
            }
        });
});

