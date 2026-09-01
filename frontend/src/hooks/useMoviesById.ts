import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import { getMoviesById } from "../services/movies";

export function useMoviesById (id:string) {
  const [movie, setMovie] = useState<Movie[]>([])

  useEffect(() => {
      const fetchMovies = async () => {
        try {
          const data = await getMoviesById(id)
          setMovie(data)
        } catch (err) {
          console.error(err)
        } 
      }
  
      fetchMovies()
    },[id])

    return { movie }
}