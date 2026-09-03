import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function ProtecteRoute ({ children }) {
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