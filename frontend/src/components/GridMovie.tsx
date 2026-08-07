import { useMovies } from "../hooks/useMovies"
import { CardMovie } from "./CardMovie"

export function GridMovie () {

  const {movies, loading, error} = useMovies()
  
    if (loading) return <h1>Cargando...</h1>
  
    if (error) return <h1>{error}</h1>

  return(
    <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4 p-20">
      {movies.map(movie => (
            <CardMovie key={movie.id} movie={movie}/>
      ))}
    </div>
  )
}