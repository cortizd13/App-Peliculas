import { GenreBar } from "./GenreBar";
import { SearchBar } from "./SearchBar";

export function HeroSection () {
  return(
    <header className="px-20 py-5 text-white flex flex-col gap-5">
      <h1 className="text-7xl line-clamp-2">Find your next favorite movie</h1>
      <p>Explore top-rated movies from all genres</p>
      <div className="flex gap-20">
        <form className="flex gap-5">
          <SearchBar/>
          <button type="submit" className="cursor-pointer bg-zinc-900 px-5 rounded-md">Search</button>
        </form>
        <GenreBar />
      </div>
    </header>
  )
}