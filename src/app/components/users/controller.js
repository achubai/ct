/**
 * @desc Users list controller
 */
class UsersCtrl {
    constructor ($scope, usersService) {
        'ngInject';

        Object.assign(this, {
            usersService
        });

        this.fetchUsers();

        $scope.$on('search', (e, data) => {
            this.searchUser(data);
        });
    }

    fetchUsers (options) {
        this.usersService.fetchUsers(options)
            .then(data => {
                this.usersList = data;
            });
    }

    searchUser (q) {
        this.searchText = q;
        this.fetchUsers({q});
    }
}

export default UsersCtrl;
