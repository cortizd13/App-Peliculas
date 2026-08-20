import express from 'express'
import { createMovieRouter } from './routes/movies.js'
import cors from 'cors'
import 'dotenv/config'
import { MovieModel } from './models/mysql/movie.js'
import morgan from 'morgan'

const app = express()
app.disable('x-powered-by')
const port = process.env.PORT

app.use(express.json())

app.use(cors())
app.use(morgan('dev'))

app.use('/movies', createMovieRouter({ movieModel: MovieModel }))

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})
