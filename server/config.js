/* eslint-env node */

module.exports = {
    endPoint: 'jsonplaceholder.typicode.com',
    connection: {
        port: 3000,
        host: 'localhost'
    },
    routes: {
        users: ({user}, {q, embed}) => '/users' + (user ? `/${user}` : '') + (q ? `?q=${q}` : '') + (embed ? `?_embed=${embed}` : ''),
        albums: ({album}, {q, embed}) => '/albums/' + (album || '') + (q ? `?q=${q}` : '') + (embed ? `?_embed=${embed}` : ''),
        photos: ({photo}) => '/photos/' + (photo || ''),

        userPosts: ({user}) => `/posts/?userId=${user}`,
        userAlbums: ({user}) => `/albums/?userId=${user}`,
        postComments: ({post}) => `/post/${post}?_embed=comments`,
        postsSearch: ({word, user}) => `posts?q=${word}` + (user ? `&userId=${user}` : '')
    }
};
