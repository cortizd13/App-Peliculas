import { Footer } from "../components/Footer";
import { GridMovie } from "../components/GridMovie";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { useMovies } from "../hooks/useMovies";
import { useSearchParams } from "react-router-dom";

export function HomePage () {
  const [searchParams] = useSearchParams()
  const title = searchParams.get('title') ?? undefined
  const genre = searchParams.get('genre') ?? undefined

  const { movies, loading, error } = useMovies(title, genre)

  return(
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <GridMovie movies={movies} loading={loading} error={error}/>
      <Footer/>
    </div>
  )
}