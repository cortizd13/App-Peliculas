import { Link } from "react-router-dom";


export function RegisterPage () {
  return (
    <div className=" flex flex-col items-center justify-center gap-5 p-5 ">
      <div className=" blur-xl min-h-screen fixed inset-0 -z-10" />
      
      <form className="bg-[#2A2A2B] flex flex-col gap-4 p-5 rounded-xl">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Create your account</h2>
          <p className="text-gray-400 ">Join CineFlix and start building your movie collection</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Nombre</label>
          <input type="text" className="bg-black rounded-sm px-4 py-2" id="name" placeholder="John Doe" required/>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email Address</label>
          <input type="text" className="bg-black rounded-sm px-4 py-2" id="email" placeholder="you@example.com"  required/>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input type="password" className="bg-black rounded-sm px-4 py-2" id="password" placeholder="*********" required/>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password-confirm">Confirm Password</label>
          <input type="password" className="bg-black rounded-sm px-4 py-2" id="password-confirm" placeholder="********" required/>
        </div>

        <div className="flex  gap-2">
          <input type="checkbox" required/>
          <p>I agree to <a href="" className="underline text-[#FFB4AA]">Terms of Service</a> and <a href="" className="underline text-[#FFB4AA]">Privacy Police</a></p>
        </div>

        <button type="submit" className="bg-[#E50914] rounded-md py-2 cursor-pointer text-lg hover:bg-[#C0000C]">Create Account</button>

        <div className="flex justify-center gap-2">
          <p>Already have an account? </p>
          <Link to='/login'>Sign in</Link>
        </div>
      </form>
    </div>
  )
}