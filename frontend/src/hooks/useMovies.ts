import { useEffect, useState } from "react";
import { getMovies } from "../services/movies";
import type { Movie } from "../types/movie";


export function useMovies (title?: string, genre?: string) {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies({ title })
        setMovies(data)
      } catch (err) {
        console.error(err)
        setError('Error loading movies')
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [title, genre])

  return { movies, loading, error }
}