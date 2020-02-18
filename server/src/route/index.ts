import post from './post'
import user from './user'
import express from 'express'

// @TODO set correct type of app
export default (app: any) => {
    app.use('/post', post)
    app.use('/user', user)
}
