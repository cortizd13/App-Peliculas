import { useEffect, useState } from "react";
import { getMovies } from "../services/movies";

export function useGenres () {
  const [ genres, setGenres ] = useState<string[]>([])

  useEffect (() => {
    const getGenres = async () => {
      const movies = await getMovies({})
      const uniqueGenres:string[] = [ ...new Set(movies.map(movie => movie.genre)) ].sort()
      setGenres(uniqueGenres)
    }

    getGenres()
  }, [])

  return { genres }
}