/**
 * @desc Albums tabs component
 */
class AlbumsTabsCtrl {
    constructor (albumsService) {
        'ngInject';

        Object.assign(this, {
            albumsService
        });

    }

}

export default AlbumsTabsCtrl;
