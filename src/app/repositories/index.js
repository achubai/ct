import usersRepository from './users.repository';
import albumsRepository from './albums.repository';

let repositoriesModule = angular.module('app.repositories', [])
    .factory('usersRepository', usersRepository)
    .factory('albumsRepository', albumsRepository);

export default repositoriesModule.name;
