import { Search, User } from "lucide-react";

export function Navbar (){

  return(
    <nav className="flex justify-between px-8 py-5 items-center bg-zinc-950 border-zinc-800">
      <a href="#" className="text-red-500 text-xl font-bold">CineFlix</a>
      <ul className="flex justify-between gap-15 ">
        <li><a href="#" className="text-zinc-300 hover:text-red-500">Home</a></li>
        <li><a href="#" className="text-zinc-300 hover:text-red-500">Movies</a></li>
        <li><a href="#" className="text-zinc-300 hover:text-red-500">Genres</a></li>
        <li><a href="#" className="text-zinc-300 hover:text-red-500">About</a></li>
      </ul>
      <div className="flex justify-between gap-5">
        <input type="text" placeholder="Search Movies..." className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 rounded-md px-4 py-1 w-96 relative"/>
        <Search size={22} color="#A1A1AA" className="absolute top-7 right-25"/>
        <div className="bg-zinc-900 border-zinc-700 flex justify-center items-center p-2 rounded-full ">
          <User color="#A1A1AA" className="cursor-pointer"/>
        </div>
      </div>
    </nav>
  )
}