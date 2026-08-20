import { CardMovie } from "./CardMovie"
import type { Movie } from "../types/movie"

interface Props {
  movies: Movie[]
  loading: boolean
  error: string | null
}

export function GridMovie ({ movies, loading, error }: Props) {

    if (loading) return <h1>Cargando...</h1>
  
    if (error) return <h1>{error}</h1>

  return(
    <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4 p-20">
      {movies.map(movie => (
            <CardMovie key={movie.id} movie={movie}/>
      ))}
    </div>
  )
}