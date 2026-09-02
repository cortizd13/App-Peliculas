import express from 'express'
import { createMovieRouter } from './routes/movies.js'
import cors from 'cors'
import 'dotenv/config'
import { MovieModel } from './models/mysql/movie.js'
import morgan from 'morgan'
import { createUserRoute } from './routes/user.js'
import { UserModel } from './models/mysql/user.js'

const app = express()
app.disable('x-powered-by')
const port = process.env.PORT

app.use(express.json())

app.use(cors())
app.use(morgan('dev'))

app.use('/movies', createMovieRouter({ movieModel: MovieModel }))
app.use('/', createUserRoute({ userModel: UserModel }))

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})
