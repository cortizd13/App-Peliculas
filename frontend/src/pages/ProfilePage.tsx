import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export function ProfilePage () {

  const {user} = useAuth()

  return (
    <div className="min-h-screen grid grid-cols-[250px_1fr] py-15 px-30 gap-10">
      <aside className="bgc-[#1C1B1C]"></aside>
      <main className="flex flex-col gap-5">
        <section className="bg-[#1C1B1C] p-6 rounded-lg">
          <h2>Account Information</h2>
          <form action="" className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-1">
                <label htmlFor="username">Username</label>
                <input className="bg-[#2A292A] py-2 px-4 rounded-md" type="text" id="username" value={user?.username} required/>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input className="bg-[#2A292A] py-2 px-4 rounded-md" type="text" id="email" value={user?.email} required/>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input className="bg-[#2A292A] py-2 px-4 rounded-md" type="password" id="password" value={user?.password} required/>
            </div>  
            <button type="submit" className="bg-[#E50914] rounded-md py-2 cursor-pointer text-lg hover:bg-[#C0000C]">Save Changes</button>
          </form>
        </section>
        <section className="bg-[#1C1B1C] p-6 rounded-lg">
          <div className="flex justify-between">
            <h2>Recent Favorites</h2>
            <Link to='/favorites' className="text-[#FFB4AA]">Ver todo</Link>
          </div>
        </section>
      </main>
    </div>
  )
}