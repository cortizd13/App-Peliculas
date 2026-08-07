import type { Movie } from "./movie";

export interface MoviesContextValue {
  movies: Movie[]
  loading: boolean
  error: string | null
}
