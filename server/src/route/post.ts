import expresss from 'express'
import Post from '../controller/post'
import Auth from '../controller/auth'

const router = expresss.Router()
// query all posts
router.get('/getAll', Auth.checkAuth, Post.getAll)

// insert new post
router.post('/insert', Auth.checkAuth, Post.insert)

// update a post
router.post('/update', Auth.checkAuth, Post.update)

// remove a post
router.post('/remove', Auth.checkAuth, Post.remove)

export default router