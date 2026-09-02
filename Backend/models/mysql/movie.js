import mysql from 'mysql2/promise'
import { configLocal } from '../../config/db.js'

const connection = await mysql.createConnection(configLocal)

export class MovieModel {
  static async getAll ({ genre, title }) {
    let query = 'select bin_to_uuid(id) as id, title, year, genre, director, duration,rating,poster from movie'
    const conditions = []
    const params = []
    if (genre) {
      conditions.push('LOWER(genre) = ?')
      params.push(genre.toLowerCase())
    }
    if (title) {
      conditions.push('LOWER(title) LIKE ?')
      params.push(`%${title.toLowerCase()}%`)
    }
    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ')
    }
    const [movie] = await connection.query(query, params)

    return movie
  }

  static async getById ({ id }) {
    const [movie] = await connection.query('select bin_to_uuid(id) as id, title, year, genre, director, duration,rating,poster from movie where BIN_TO_UUID(id) = ?', [id])

    return movie[0]
  }
}
