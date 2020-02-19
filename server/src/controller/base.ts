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
}

export default BaseController