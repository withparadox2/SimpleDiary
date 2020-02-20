import expresss from 'express'
import User from '../controller/user'
import Auth from '../controller/auth'

const router = expresss.Router()
// login
router.post('/login', User.login)

// logout
router.post('/logout', Auth.checkAuth, User.logout)

// register
router.post('/register', User.register)

export default router
