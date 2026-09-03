import { Eye, Lock, User } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import type { UserLoginSchema } from "../types/user";
import { loginUser } from "../services/authUtils";
import { useAuth } from "../hooks/useAuth";

export function LoginPage () {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState<UserLoginSchema>({
    email:'',
    password:''
  })
  const { setUser } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state
  const from = state.from ?? '/'

  function handleVisibility () {
    setShowPassword(!showPassword)
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  async function handleSubmit (e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const result = await loginUser(form)

    if (result) {
      setUser(result.user)
      navigate(from,{ replace: true})
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-5 ">
      <form onSubmit={handleSubmit} className="bg-[#2A2A2B] flex flex-col gap-4 p-5  rounded-xl w-100">
        <div className="flex flex-col gap-1"> 
          <h2 className="text-xl font-bold">Welcome Back</h2>
          <p className="text-gray-400 ">Sign in to continue exploring movies. </p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" >Email Address</label>
          <div className="relative w-full max-w-sm">
              <div className="absolute top-2 left-2">
                <User />
              </div>
            <input type="email" name="email" className="w-full bg-black rounded-sm px-10 py-2" placeholder="Enter your Email" required value={form.email} onChange={handleChange}/>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="pasword">Password</label>
          <div className="relative w-full max-w-sm">
            <div className="absolute top-2 left-2">
              <Lock/>
            </div>
            <input type={showPassword ? "text": "password"} name="password" className="w-full bg-black rounded-sm px-10 py-2" placeholder="Enter your Password" required value={form.password} onChange={handleChange}/>
            <div className="absolute top-2 right-2 cursor-pointer">
              <button className="cursor-pointer" onClick={handleVisibility} type="button">
                <Eye />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-1 justify-center align-center">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember me</label>
          </div>
          <a className="text-[#FFB4AA]">Forgot password?</a>
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