import { userRepository } from '../../repository/userRepository.js'

export class UserModel {
  static async createUser ({ username, email, password }) {
    const user = await userRepository.create({ username, email, password })

    return user
  }
}
