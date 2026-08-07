import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


export function Footer () {
  return (
    <footer className="flex justify-between px-8 py-5 bg-zinc-950 border-zinc-800 text-zinc-400 items-center">
      <p>&copy; 2024 CineFlix. All rights reserved.</p>
      <div className="flex justify-between gap-5 ">
        <a href="#" className="bg-zinc-900 hover:bg-zinc-800 border-zinc-700 w-10 h-10 rounded-full flex justify-center items-center"><FaFacebook size={22} color="#A1A1AA"/></a>
        <a href="#" className="bg-zinc-900 hover:bg-zinc-800 border-zinc-700 w-10 h-10 rounded-full flex justify-center items-center"><FaInstagram size={22} color="#A1A1AA"/></a>
        <a href="#" className="bg-zinc-900 hover:bg-zinc-800 border-zinc-700 w-10 h-10 rounded-full flex justify-center items-center"><FaTwitter size={22} color="#A1A1AA"/></a>
      </div>
    </footer>
  )
}