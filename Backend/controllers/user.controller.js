export class UserController {
  constructor ({ userModel }) {
    this.userModel = userModel
  }

  createUser = async (req, res) => {
    const { username, email, password } = req.body
    try {
      const user = await this.userModel.createUser({ username, email, password })
      res.send({ user })
    } catch (e) {
      res.status(400).send(e.message)
    }
  }
}
