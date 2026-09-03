import { createContext, useEffect, useState, type ReactNode } from "react";
import type { UserSchema } from "../types/user";
import { checkLogin } from "../services/auth";
import type { AuthContextType } from "../types/context";



export const authContext = createContext<AuthContextType | null>(null)

export function AuthProvider ({ children }: {children: ReactNode}) {
  const [ user, setUser ] = useState<UserSchema | null>(null)
  const [ loading, setLoading ] = useState(true)

  useEffect(()=>{
    async function checkAuth () {
      try {
        const data = await checkLogin()
        setUser(data)
      } catch  {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
    
  }, [])

  return (
    <authContext.Provider value={{ user, setUser,loading } }>
      {children}
    </authContext.Provider>
  )
}