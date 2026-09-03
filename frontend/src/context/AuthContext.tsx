import { createContext, useEffect, useState } from "react";
import type { UserSchema } from "../types/user";
import { checkLogin } from "../services/auth";

export const authContext = createContext(null)

export function AuthProvider ({ children }) {
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