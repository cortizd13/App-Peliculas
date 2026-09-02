import { api } from "./api";

export async function register ({ username, email, password }) {
  const { data } = await api.post('/register', {
    username,
    email,
    password
  })

  return data
}

