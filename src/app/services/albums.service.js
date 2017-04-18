/**
 * @desc Users service
 */
class AlbumsService {
    constructor ($q, albumsRepository) {
        'ngInject';

        Object.assign(this, {
            $q,
            albumsRepository
        });
    }

    fetchAlbums (options) {
        const deferred = this.$q.defer();

        this.albumsRepository.fetchAlbums(options)
            .then(({data}) => {
                deferred.resolve(data);
            });

        return deferred.promise;
    }

    fetchAlbum (id, options) {
        const deferred = this.$q.defer();

        this.albumsRepository.fetchAlbum(id, options)
            .then(({data}) => {
                this.albumData = data;
                deferred.resolve(data);
            });

        return deferred.promise;
    }

    get album () {
        return this.albumData;
    }
}

export default AlbumsService;
