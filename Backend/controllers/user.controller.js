import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

export class UserController {
  constructor ({ userModel }) {
    this.userModel = userModel
  }

  createUser = async (req, res) => {
    const { username, email, password } = req.body
    try {
      const user = await this.userModel.createUser({ username, email, password })
      res.send({ user })
    } catch (e) {
      res.status(400).send(e.message)
    }
  }

  loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
      const user = await this.userModel.loginUser({ email, password })
      const token = jwt.sign({ username: user.username, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '1h'
      })
      res.cookie('access_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60
      }).send({ user })
    } catch (e) {
      res.status(401).send(e.message)
    }
  }

  checkLogin = async (req,res) => {
    if (!req.session.user) {
      return res.status(401).json({ message: 'User is not authenthicated' })
    }
    res.json(req.session.user)
  }
}
