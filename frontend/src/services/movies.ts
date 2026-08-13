
import { api } from "./api";



export async function getMovies (name?: string, genre?:string)  {
  const { data } = await api.get('/movies', {
    params: {
      name, 
      genre
    }
  })
  return data
}

export async function getMoviesById(id:number) {
  const { data } = await api.get(`/movies/${id}`)
  return data
}