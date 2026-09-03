import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { ReactNode } from "react";

export function ProtecteRoute ({ children }: {children: ReactNode}) {
  const location = useLocation()
  const { user, loading } = useAuth()
  // console.log(user)

  if (loading) {
    return <div>Cargando...</div>
  }

  if (!user) {
    return <Navigate to='/login' replace state={{ from: location.pathname }} />
  }

  return children
} 