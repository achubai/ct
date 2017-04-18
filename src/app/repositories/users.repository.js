/**
 * @desc Users repository
 * @param {Object} $http - angular's service for communication with server
 * @param {string} BASE_PATH - base path
 * @returns {Object} repository's api
 */
function usersRepository ($http, BASE_PATH) {
    'ngInject';
    const users = `${BASE_PATH}users/`;

    /**
     * @desc fetch users
     * @param {Object} options - query options
     * @returns {Object} promise
     */
    function fetchUsers (options = {}) {
        return $http.get(users, {params: options});
    }

    /**
     * @desc fetch user
     * @param {string} id - user id
     * @param {Object} options - query options
     * @returns {Object} promise
     */
    function fetchUser (id = '', options = {}) {
        return $http.get(`${users}${id}`, {params: options});
    }

    /**
     * @desc create new user
     * @param {Object} data - user data
     * @returns {Object} Promise
     */
    function createUser (data = {}) {
        return $http.post(users, data);
    }

    /**
     * @desc update user
     * @param {string} id - user id
     * @param {Object} data - user data
     * @returns {Object} Promise
     */
    function updateUser (id = '', data = {}) {
        return $http.put(`${users}${id}`, data);
    }

    /**
     * @desc remove user
     * @param {string} id - user id
     * @returns {Object} Promise
     */
    function removeUser (id = '') {
        return $http.delete(`${users}${id}`);
    }

    return {
        fetchUsers,
        fetchUser,
        createUser,
        updateUser,
        removeUser
    };
}

export default usersRepository;
