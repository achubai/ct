/**
 * @desc Albums info component
 */
class AlbumsInfoCtrl {
    constructor (albumsService) {
        'ngInject';

        Object.assign(this, {
            albumsService
        });

        this.photos = albumsService.album.photos;

    }

}

export default AlbumsInfoCtrl;
