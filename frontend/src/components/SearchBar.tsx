import { Search } from "lucide-react";
import { useFilters } from "../hooks/useFilter";


export function SearchBar () {
  const { currentTitle, handleFilter} = useFilters()

  return(
    <div className="relative">
      <input type="text" name="title" placeholder="Search Movies..." className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 rounded-md px-10 py-3 w-96 " value={currentTitle} onChange={(e) => handleFilter("title", e.target.value)}/>
      <Search size={22} color="#A1A1AA" className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  )
}