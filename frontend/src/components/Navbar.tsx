
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function Navbar (){

  const { user } = useAuth()

  return(
    <nav className="flex justify-between px-8 py-5 items-center bg-zinc-950 border-zinc-800 ">
      <Link to='/' className="text-[#E50914] text-4xl font-bold">CineFlix</Link>
      <ul className="flex justify-between gap-15  ">
        <li><NavLink className={({ isActive }) => isActive ? 'text-red-500' : 'text-[#FFB4AA] hover:text-red-500'} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-red-500' : 'text-[#FFB4AA] hover:text-red-500'} to='/movies'>Movies</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-red-500' : 'text-[#FFB4AA] hover:text-red-500'} to='/genres'>Genres</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-red-500' : 'text-[#FFB4AA] hover:text-red-500'} to='/favorites'>Favorites</NavLink></li>
        
      </ul>
      {/* <div className="flex justify-between ">
        <input type="text" placeholder="Search Movies..." className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 rounded-md px-4 py-1 w-96 relative"/>
        <Search size={22} color="#A1A1AA" className="absolute top-7 right-25"/>
        <div className="bg-zinc-900 border-zinc-700 flex justify-center items-center p-2 rounded-full ">
          <User color="#A1A1AA" className="cursor-pointer"/>
        </div>
      </div> */}

      {
        user ? 
          <div className="flex gap-5">
            <p>{user.username}</p>
            <Link to='/profile'>Mi Perfil</Link>
          </div>
          :
          <div className="flex gap-5 ">
            <Link className='rounded-lg bg-zinc-950 shadow-md text-white px-6 py-2 transition hover:bg-zinc-900' to='/register'>Register</Link>
            <Link className='bg-[#E50914] px-6 py-2 rounded-md shadow-md text-white font-medium transition hover:bg-[#C0000C]' to='/login'>Login</Link>
        </div>
      }
    </nav>
  )
}