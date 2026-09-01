import { useParams } from "react-router-dom"
import { useMoviesById } from "../hooks/useMoviesById"

export function MovieDetails () {
  const { id } = useParams()

  const { movie } = useMoviesById(id ?? "")

   if (!id) {
    return <p>Película no encontrada</p>
  }

  
  return(
    <>
      <h1>{movie.title}</h1>
      <p className="text-zinc-400">⭐ {movie.rating}</p>
      <p className="text-zinc-400">{movie.year}</p>
      <p className="text-zinc-400">{movie.genre}</p>
    </>
      
  )
}