import { getMovies } from "../services/movies";
import { useEffect, useState, type ReactNode } from 'react'
import type { Movie } from "../types/movie";
import { MoviesContext } from "./movies-context";

export function MoviesProvider ({ children }: { children: ReactNode }){
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string|null>(null)

  useEffect(()=>{
    const fetchMovies = async () => {
      try {
        const data = await getMovies()
        setMovies(data)
      } catch (err) {
        console.error(err)
        setError('Error loading movies')
      }finally{
        setLoading(false)
      }
    }

    fetchMovies()
  },[])

  return (
    <MoviesContext.Provider value={{ movies, loading, error }}>
      {children}
    </MoviesContext.Provider>
  )
}
