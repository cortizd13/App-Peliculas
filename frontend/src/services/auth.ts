import { api } from "./api";

export async function register ({ username, email, password }) {
  const { data } = await api.post('/register', {
    username,
    email,
    password
  })

  return data
}

export async function login({ email, password }) {
  const { data } = await api.post('/login', {
    email,
    password
  })

  return data
}

export async function checkLogin () {
  const { data } = await api.get('/me')

  return data
}
