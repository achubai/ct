import angular from 'angular';

import main from './main';
import users from './users';
import header from './header';
import search from './search';
import userTabs from './user-tabs';
import userAlbums from './user-albums';
import userInfo from './user-info';
import albums from './albums';
import albumsTabs from './albums-tabs';
import albumInfo from './album-info';
import charts from './charts';

const components = angular.module('app.components', [])
    .component('main', main)
    .component('users', users)
    .component('appHeader', header)
    .component('userTabs', userTabs)
    .component('userInfo', userInfo)
    .component('userAlbums', userAlbums)
    .component('search', search)
    .component('albums', albums)
    .component('albumsTabs', albumsTabs)
    .component('albumInfo', albumInfo)
    .component('charts', charts);

export default components.name;
