import { configLocal } from '../config/db.js'
import { validateLogin, validateUser } from '../schema/user.js'
import mysql from 'mysql2/promise'
import bcrypt from 'bcrypt'

const connection = await mysql.createConnection(configLocal)

export class userRepository {
  static async create ({ username, email, password }) {
    validateUser({ username, email, password })

    const [user] = await connection.query('select * from user where username = ?', [username])
    if (user.length > 0) {
      throw new Error('Username already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await connection.query('insert into user (username, email, password) values (?,?,?)', [username, email, hashedPassword])

    return 'User register perfectly'
  }

  static async login ({ email, password }) {
    validateLogin({ email, password })

    const [[user]] = await connection.query('select * from user where email = ?', [email])
    if (!user) throw new Error('user does not exists')

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) throw new Error('password is invalid')

    const { password: _, ...publicUser } = user

    return publicUser
  }
}
