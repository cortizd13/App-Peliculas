import express from 'express'
import { createMovieRouter } from './routes/movies.js'
import cors from 'cors'
import 'dotenv/config'
import { MovieModel } from './models/mysql/movie.js'
import morgan from 'morgan'
import { createUserRoute } from './routes/user.js'
import { UserModel } from './models/mysql/user.js'
import cookieParser from 'cookie-parser'

const app = express()
app.disable('x-powered-by')
const port = process.env.PORT
const allowedOrigin = [
  'http://localhost:5173',
  'https://app-peliculas-five.vercel.app/'
]

app.use(express.json())

app.use(cors({
  origin: allowedOrigin,
  credentials: true
}))
app.use(morgan('dev'))
app.use(cookieParser())


app.use('/movies', createMovieRouter({ movieModel: MovieModel }))
app.use('/', createUserRoute({ userModel: UserModel }))

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})
