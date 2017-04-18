/**
 * @desc Users service
 */
class UsersService {
    constructor ($q, usersRepository, $state, toastr) {
        'ngInject';

        Object.assign(this, {
            $q,
            usersRepository,
            $state,
            toastr
        });

        this.emptyUserData = {
            name: '',
            username: '',
            email: '',
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode: '',
                geo: {
                    lat: '',
                    lng: ''
                }
            },
            phone: '',
            website: '',
            company: {
                name: '',
                catchPhrase: '',
                bs: ''
            }
        };

    }

    fetchUsers (options) {
        const deferred = this.$q.defer();

        this.usersRepository.fetchUsers(options)
            .then(({data}) => {
                deferred.resolve(data);
            });

        return deferred.promise;
    }

    fetchUser (id, options) {
        const deferred = this.$q.defer();

        this.usersRepository.fetchUser(id, options)
            .then(({data}) => {
                this.userData = data;

                deferred.resolve(data);
            });

        return deferred.promise;
    }

    createUser (userData) {
        const deferred = this.$q.defer();

        this.usersRepository.createUser(userData)
            .then(({data}) => {
                deferred.resolve(data);
                this.toastr.success('User was successfully created', 'Success');
            });

        return deferred.promise;
    }

    updateUser (id, userData) {
        const deferred = this.$q.defer();

        this.usersRepository.updateUser(id, userData)
            .then(({data}) => {
                deferred.resolve(data);
                this.toastr.success('User was successfully updated', 'Success');
            });

        return deferred.promise;
    }

    removeUser (id) {
        const deferred = this.$q.defer();

        this.usersRepository.removeUser(id)
            .then(({data}) => {
                deferred.resolve(data);
                this.toastr.success('User was successfully removed', 'Success');
            });

        return deferred.promise;
    }

    get user () {
        return this.userData;
    }

    get emptyUser () {
        return this.emptyUserData;
    }
}

export default UsersService;
