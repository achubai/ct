import UsersService from './users.service';
import AlbumsService from './albums.service';
import BaseModalService from './confirmation.service';
import HelperService from './helper.service';

const servicesModule = angular.module('app.services', [])
    .service('usersService', UsersService)
    .service('albumsService', AlbumsService)
    .service('baseModalService', BaseModalService)
    .service('helperService', HelperService);

export default servicesModule.name;
