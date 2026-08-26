
import type { Movie } from "../types/movie";
import { api } from "./api";


export async function getMovies (params?: {title?:string,genre?:string}):Promise<Movie[]>   {
  const { data } = await api.get('/movies', {params})
  return data
}

export async function getMoviesById(id:string) {
  const { data } = await api.get(`/movies/${id}`)
  return data
}