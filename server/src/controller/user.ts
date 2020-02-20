import express from 'express'
import UserModel from '../model/user'
import BaseController from './base'

class UserController extends BaseController {
  constructor() {
    super()
    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  async login(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const { email, password } = req.body
      const user = await UserModel.findOne({ email, password })

      if (!user) {
        return this.sendFail(res, `Email or password is not correct.`)
      }

      req.session.user_id = user._id
      this.sendSuccess(res, 'Login successfully', {
        user: {
          userName: user.userName,
          email: user.email,
          userId: user._id
        }
      })
    } catch (e) {
      console.log(e)
      this.sendFail(res, `Login unsuccessfully for: ` + e)
    }
  }

  async logout(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    delete req.session.admin_id
    this.sendSuccess(res, 'Logout successfully.')
  }

  // TODO Check whether email is valid
  // TODO Also add process of sending code to verify the email
  // TODO Use md5 to encrypt password
  async register(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const { email, password, userName } = req.body

      if (!email || !password || !userName) {
        return this.sendFail(
          res,
          `Email or password or user name can not be empty`
        )
      }

      const user = await UserModel.findOne({ email })
      if (user) {
        return this.sendFail(res, `Email ${email} has been registered`)
      }

      const newUser = new UserModel({
        email,
        password,
        userName
      })

      await newUser.save()
      this.sendSuccess(res, 'Register successfully')
    } catch (e) {
      // TODO Take care of logs
      console.log(e)
      this.sendFail(res, `Register unsuccessfully for: ` + e)
    }
  }
}

export default new UserController()
