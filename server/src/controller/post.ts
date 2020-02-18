import express from 'express'
import BaseController from './base'

class PostController extends BaseController {
    getAll(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.send('getAll')
    }

    insert(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.send('insert')
    }

    update(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.send('update')
    }

    remove(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.send('remove')
    }
}

export default new PostController()