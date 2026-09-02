import { Link } from "react-router-dom";

export function LoginPage () {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-5 ">
      <form action="" className="bg-[#2A2A2B] flex flex-col gap-4 p-5  rounded-xl w-100">
        <div className="flex flex-col gap-1"> 
          <h2 className="text-xl font-bold">Welcome Back</h2>
          <p className="text-gray-400 ">Sign in to continue exploring movies. </p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" >Email Address</label>
          <input type="text" id="email" className="bg-black rounded-sm px-4 py-2" placeholder="Enter your Email" required/>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="pasword">Password</label>
          <input type="text" id="password" className="bg-black rounded-sm px-4 py-2" placeholder="Enter your Password" required/>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-1 justify-center align-center">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember me</label>
          </div>
          <p className="text-[#FFB4AA]">Forgot password?</p>
        </div>

        <button type="submit" className="bg-[#E50914] rounded-md py-2 cursor-pointer text-lg hover:bg-[#C0000C]">Sign in</button>

        <p className="m-auto">or continue with</p>

        <div className="flex justify-center gap-10">
          <button className="bg-black py-1 px-12 rounded-md cursor-pointer">Google</button>
          <button className="bg-black py-1 px-12 rounded-md cursor-pointer">Apple</button>
        </div>

        <p className="m-auto">New to CineFlix? <Link to='/register' className="text-[#FFB4AA]">Create an account</Link></p>
      </form>
    </div>
  )
}