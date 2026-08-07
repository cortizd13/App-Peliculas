
import { api } from "./api";

export async function getMovies ()  {
  const { data } = await api.get('/movies')
  return data
}

export async function getMoviesById(id:number) {
  const { data } = await api.get(`/movies/${id}`)
  return data
}