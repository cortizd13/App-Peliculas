
import { useContext } from "react";
import { MoviesContext } from "../context/movies-context";



export function useMovies () {
  const ctx = useContext(MoviesContext)
  if (!ctx) throw new Error("useMovies must be used within MoviesProvider")

  return ctx 
}