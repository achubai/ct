/**
 * @desc Main component
 */
class MainCtrl {
    constructor ($scope, usersService, $transitions) {
        'ngInject';

        Object.assign(this, {
            $scope,
            usersService
        });

        // $scope.$on('search', (e, data) => {
        //     $scope.$broadcast('search', data);
        // });

        $transitions.onStart({from: 'main.**', to: 'main.**'}, () => {
            this.searchValue = '';
        });

    }

    fetchUsers () {
        this.usersService.fetchUsers()
            .then(data => {
                this.users = data;
            });
    }
}

export default MainCtrl;
