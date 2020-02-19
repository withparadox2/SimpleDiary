import { get, post } from './http'

export function login(email, password) {
    return post({
        path: '/user/login',
        content: {
            email,
            password
        }
    })
}

export function logout() {
    return post({
        path: '/user/logout'
    })
}

export function register(email, password, userName) {
    return post({
        path: '/user/register',
        content: {
            email,
            password,
            userName
        }
    })
}

export function getAllPost(userId) {
    return get({
        path: '/post/getAll',
        params: {
            userId
        }
    })
}

export function insertPost(userId, post) {
    return post({
        path: '/post/insert',
        content: {
            ...post,
            userId
        }
    })
}

export function updatePost(userId, post) {
    return post({
        path: '/post/update',
        content: {
            ...post,
            userId
        }
    })
}

export function removePost(userId, postId) {
    return post({
        path: '/post/remove',
        content: {
            postId,
            userId
        }
    })
}