import express from 'express'
import BaseController from './base'
class AuthController extends BaseController {
    checkAuth(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (!req.session || !req.session.user_id) {
            res.send({
                status: 401,
                message: 'User is not logged in'
            })
        } else {
            next()
        }
    }
}

export default new AuthController()