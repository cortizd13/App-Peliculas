export class MovieController {
  constructor ({ movieModel }) {
    this.movieModel = movieModel
  }

  getAll = async (req, res) => {
    const { genre, title } = req.query
    const movies = await this.movieModel.getAll({ genre, title })
    res.json(movies)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const movie = await this.movieModel.getById({ id })
    if (movie) return res.json(movie)
    res.status(404).json({ message: 'Movie not found' })
  }

  createUser = async (req, res) => {
    const { username, email, password } = req.body
    try {
      const user = await this.movieModel.createUser({ username, email, password })
      res.send({ user })
    } catch (e) {
      res.status(400).send(e.message)
    }
  }
}
