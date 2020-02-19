import express from 'express'

class BaseController {
    sendSuccess(res: express.Response, message?: string | object, result?: object) {
        if (typeof message == 'object') {
            result = message
            message = ''
        }
        res.send({
            success: true,
            result,
            message
        })
    }

    sendFail(res: express.Response, message: string) {
        res.send({
            success: false,
            message
        })
    }

    checkUser(req : express.Request, userId : string) {
        if (req.session.user_id != userId) {
            throw new Error('Have no right to operate.')
        }
    }
}

export default BaseController