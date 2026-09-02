import { Router } from 'express'
import { UserController } from '../controllers/user.controller.js'

export function createUserRoute ({ userModel }) {
  const router = Router()

  const userController = new UserController({ userModel })

  router.post('/register', userController.createUser)

  return router
}
