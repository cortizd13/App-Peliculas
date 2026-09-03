import { useContext } from "react";
import { authContext } from "../context/AuthContext";

export function useAuth () {
  const context = useContext(authContext)

  if (!context) throw new Error('useAuth debe utilizarse dentro de AuthProvider')

  return context
}