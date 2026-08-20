import type { Movie } from "../types/movie"

interface Props {
  movies: Movie[]
}

export function GenreBar ({ movies }: Props) {

  const genres:string[] = [ ...new Set(movies.map(movie => movie.genre)) ].sort()

  return(
    <select className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 rounded-md px-4 py-1  ">
      <option value="All Genres">All Genres</option>
      {
        genres.map(genre => (
          <option value={genre} key={genre}>{genre}</option>
        ))
      }
    </select>
  )
}