/**
 * @desc User albums component
 */
class UserAlbumsCtrl {
    constructor (usersService) {
        'ngInject';

        Object.assign(this, {

        });

        this.albums = usersService.user.albums;

    }
}

export default UserAlbumsCtrl;
