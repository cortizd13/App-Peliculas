import { useParams } from "react-router-dom"
import { useMoviesById } from "../hooks/useMoviesById"

export function MovieDetails () {
  const { id } = useParams()
  const { movie } = useMoviesById(id)
  return(
    <>
      {movie.map( movieInfo => {
        <>
          <h1>{movieInfo.title}</h1>
          <p className="text-zinc-400">⭐ {movieInfo.rating}</p>
          <p className="text-zinc-400">{movieInfo.year}</p>
          <p className="text-zinc-400">{movieInfo.genre}</p>
        </>
      })}
      
    </>
  )
}