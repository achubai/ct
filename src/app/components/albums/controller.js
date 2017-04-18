/**
 * @desc Albums component
 */
class AlbumsCtrl {
    constructor ($scope, albumsService) {
        'ngInject';

        Object.assign(this, {
            albumsService
        });

        this.fetchAlbums();

        $scope.$on('search', (e, data) => {
            this.searchAlbum(data);
        });
    }

    fetchAlbums (options) {
        this.albumsService.fetchAlbums(options)
            .then(data => {
                this.albumsList = data;
            });
    }

    searchAlbum (q) {
        this.searchText = q;
        this.fetchAlbums({q});
    }

}

export default AlbumsCtrl;
