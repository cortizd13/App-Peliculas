import { Router } from 'express'
import { MovieController } from '../controllers/movies.controller.js'

export function createMovieRouter ({ movieModel }) {
  const router = Router()

  const movieController = new MovieController({ movieModel })

  router.get('/', movieController.getAll)

  router.get('/:id', movieController.getById)

  return router
}
