import { readJSON } from '../../utils/ReadJson.js'

const movies = readJSON('../movies.json')

export class MovieModel {
  static async getAll ({ genre }) {
    if (genre) {
      return movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase())
    }

    return movies
  }

  static async getById ({ id }) {
    const movie = movies.find(movie => movie.id === Number(id))
    return movie
  }
}
