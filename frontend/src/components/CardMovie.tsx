
import type { Movie } from "../types/movie"

interface Props {
  movie: Movie
}

export function CardMovie ({ movie }: Props) {
  return(
    <div className="bg-zinc-900 border border-zinc-800 rounded-md shadow-lg shadow-black/40 flex flex-col justify-between overflow-hidden">
  <img 
    src={movie.poster} 
    alt={`Poster de ${movie.title}`} 
    className="w-full h-80 object-cover"
  />
  <div className="px-5 py-3 flex flex-col gap-1">
    <h1 className="text-white  font-semibold truncate text-xl">{movie.title}</h1>
    <div className="flex justify-between text-sm">
      <p className="text-zinc-400">⭐ {movie.rating}</p>
      <p className="text-zinc-400">{movie.year}</p>
      <p className="text-zinc-400">{movie.genre}</p>
    </div>
  </div>
</div>
  )
}