import angular from 'angular';

/**
 * @desc User info component
 */
class UserInfoCtrl {
    constructor ($state, usersService, baseModalService) {
        'ngInject';

        Object.assign(this, {
            $state,
            usersService,
            baseModalService
        });

        this.user = angular.copy(usersService.user);

        this.isDisabled = !this.create;

        if (this.create) {
            this.user = angular.copy(usersService.emptyUser);
        }
    }

    cancel () {
        if (this.create) {
            this.$state.go('^');
        } else if (this.userForm.$dirty) {

            this.baseModalService.confirmationModal({
                title: 'Edit',
                content: 'Do you really want to leave without saving?'
            }).result.then(() => {
                this.user = angular.copy(this.userData);
                this.isDisabled = true;
            });

        } else {
            this.isDisabled = true;
        }
    }

    createUser () {
        if (this.userForm.$invalid) {
            return;
        }

        this.usersService.createUser(this.user)
            .then(() => {
                this.$state.go('^');
            });
    }

    updateUser () {
        this.usersService.updateUser(this.user.id, this.user)
            .then(() => {
                this.$state.go('^');
            });
    }

    removeUser () {
        this.baseModalService.confirmationModal({
            title: 'Remove',
            content: 'Do you really want to remove user?'
        }).result.then(() => {
            this.usersService.removeUser(this.user.id)
                .then(() => {
                    this.$state.go('^');
                });
        });

    }
}

export default UserInfoCtrl;
