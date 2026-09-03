import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { UserSchema } from "../types/user";
import { toast } from "sonner";
import { createUser } from "../services/authUtils";
import { Key, Lock, Mail, User } from "lucide-react";


export function RegisterPage () {

  const [form, setForm] = useState<UserSchema>({
    username: '',
    email:'',
    password:''
  })

  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.password !== confirmPassword) {
      toast.error('Las contraseñas no coinciden')
      return
    }
      
    const result = await createUser(form)
      
    if (result) {
      navigate('/login')
    }
  }

  return (
    <div className=" flex flex-col items-center justify-center gap-5 p-5 ">
      <div className=" blur-xl min-h-screen fixed inset-0 -z-10" />
      
      <form className="bg-[#2A2A2B] flex flex-col gap-4 p-5 rounded-xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Create your account</h2>
          <p className="text-gray-400 ">Join CineFlix and start building your movie collection</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Nombre</label>
          <div className="relative w-full max-w-sm">
            <div className="absolute top-2 left-2">
              <User />
            </div>
            <input type="text" className="w-full bg-black rounded-sm px-10 py-2" id="name" placeholder="John Doe" required name="username" value={form.username} onChange={handleChange}/>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email Address</label>
          <div className="relative w-full max-w-sm">
            <div className="absolute top-2 left-2">
              <Mail />
            </div>
              <input type="text" className="w-full bg-black rounded-sm px-10 py-2" id="email" placeholder="you@example.com"  required name="email" value={form.email} onChange={handleChange}/>
           
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <div className="relative w-full max-w-sm">
            <div className="absolute top-2 left-2">
              <Lock />
            </div>
            <input type="password" className="w-full bg-black rounded-sm px-10 py-2" id="password" placeholder="*********" required name="password" value={form.password} onChange={handleChange}/>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password-confirm">Confirm Password</label>
          <div className="relative w-full max-w-sm">
            <div className="absolute top-2 left-2">
              <Key />
            </div>
            <input type="password" className="w-full bg-black rounded-sm px-10 py-2" id="password-confirm" placeholder="********" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </div>
          
        </div>

        <div className="flex  gap-2">
          <input type="checkbox" required/>
          <p>I agree to <a href="" className="underline text-[#FFB4AA]">Terms of Service</a> and <a href="" className="underline text-[#FFB4AA]">Privacy Police</a></p>
        </div>

        <button type="submit" className="bg-[#E50914] rounded-md py-2 cursor-pointer text-lg hover:bg-[#C0000C]">Create Account</button>

        <div className="flex justify-center gap-2">
          <p>Already have an account? </p>
          <Link to='/login' className="text-[#FFB4AA]">Sign in</Link>
        </div>
      </form>
    </div>
  )
}