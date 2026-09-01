import { useGenres } from "../hooks/useGenres"
import { useFilters } from "../hooks/useFilter"

export function GenreBar () {

  const { currentGenre, handleFilter} = useFilters()

  const { genres } = useGenres()

  return(
    <select className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 rounded-md px-4 py-1 " value={currentGenre } onChange={(e) => handleFilter("genre",e.target.value)}>
      <option value="">All Genres</option>
      {
        genres.map(genre => (
          <option value={genre} key={genre}>{genre}</option>
        ))
      }
    </select>
  )
}