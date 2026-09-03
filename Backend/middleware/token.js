import jwt from "jsonwebtoken"
import 'dotenv/config.js'

export function validateAuth (req,res,next) {
  const token = req.cookies?.access_token
  req.session = {user: null}

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET)
    req.session.user = data
  } catch (error) {
    req.session.user = null
  }

  next()
}