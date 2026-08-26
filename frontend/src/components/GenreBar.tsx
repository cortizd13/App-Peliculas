import { useSearchParams } from "react-router-dom"
import { useGenres } from "../hooks/useGenres"

export function GenreBar () {

  const [ searchParams, setSearchParams ] = useSearchParams()

  const currentGenre = searchParams.get('genre') ?? 'All Genres'

  const { genres } = useGenres()

  function handleFilterGenreBar (value:string) {
    const nextParams = new URLSearchParams(searchParams)

    if(value) {
      nextParams.set("genre", value)
    } else {
      nextParams.delete("genre")
    }

    setSearchParams(nextParams)

  }

  return(
    <select className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 rounded-md px-4 py-1 " value={currentGenre} onChange={(e) => handleFilterGenreBar(e.target.value)}>
      <option value="">All Genres</option>
      {
        genres.map(genre => (
          <option value={genre} key={genre}>{genre}</option>
        ))
      }
    </select>
  )
}