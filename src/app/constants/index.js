import mainMenuConstants from './main-menu.constants';

let appConstantsModule = angular.module('app.constants', [])
    .constant('BASE_PATH', 'http://localhost:3000/api/')
    .constant('mainMenuConstants', mainMenuConstants);

export default appConstantsModule.name;
