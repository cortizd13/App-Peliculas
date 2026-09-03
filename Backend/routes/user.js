import { Router } from 'express'
import { UserController } from '../controllers/user.controller.js'
import { validateAuth } from '../middleware/token.js'

export function createUserRoute ({ userModel }) {
  const router = Router()

  const userController = new UserController({ userModel })

  router.post('/register', userController.createUser)

  router.post('/login', userController.loginUser)

  router.get('/me', validateAuth,userController.checkLogin)

  return router
}
