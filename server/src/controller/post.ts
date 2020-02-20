import express from 'express'
import BaseController from './base'
import PostModel from '../model/post'

class PostController extends BaseController {
  constructor() {
    super()
    this.getAll = this.getAll.bind(this)
    this.insert = this.insert.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
  }

  async getAll(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const { userId } = req.query
      this.checkUser(req, userId)

      const posts = await PostModel.find({
        userId
      })
      this.sendSuccess(res, {
        posts
      })
    } catch (e) {
      this.sendFail(res, 'Error: ' + e)
    }
  }

  async insert(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const { title, content, userId } = req.body
      this.checkUser(req, userId)

      if (!title || !content) {
        return this.sendFail(res, `Title or content can not be empty`)
      }

      let post = new PostModel({
        content,
        title,
        userId
      })

      post = await post.save()

      this.sendSuccess(res, {
        post
      })
    } catch (e) {
      this.sendFail(res, 'Error: ' + e)
    }
  }

  async update(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const { postId, title, content, userId } = req.body
      this.checkUser(req, userId)

      const post = await PostModel.findOne({
        _id: postId
      })
      if (!post) {
        return this.sendFail(res, 'Can not find target post.')
      }

      if (title) {
        post.title = title
      }

      if (content) {
        post.content = content
      }

      await post.save()
    } catch (e) {
      this.sendFail(res, 'Error: ' + e)
    }
  }

  async remove(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const { postId, userId } = req.body
      this.checkUser(req, userId)

      await PostModel.remove({
        _id: postId
      })
      this.sendSuccess(res, 'Remove post successfully.')
    } catch (e) {
      this.sendFail(res, 'Error: ' + e)
    }
  }
}

export default new PostController()
