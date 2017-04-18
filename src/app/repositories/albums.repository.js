/**
 * @desc Albums repository
 * @param {Object} $http - angular's service for communication with server
 * @param {string} BASE_PATH - base path
 * @returns {Object} repository's api
 */
function albumsRepository ($http, BASE_PATH) {
    'ngInject';
    const albums = `${BASE_PATH}albums/`;

    /**
     * @desc fetch albums
     * @param {Object} options - query options
     * @returns {Object} promise
     */
    function fetchAlbums (options = {}) {
        return $http.get(albums, {params: options});
    }

    /**
     * @desc fetch album
     * @param {string} id - album id
     * @param {Object} options - query options
     * @returns {Object} promise
     */
    function fetchAlbum (id = '', options = {}) {
        return $http.get(`${albums}${id}`, {params: options});
    }

    return {
        fetchAlbums,
        fetchAlbum
    };
}

export default albumsRepository;
