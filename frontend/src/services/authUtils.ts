import { register } from "./auth";
import axios from "axios";
import { toast } from "sonner";

  export const createUser = async ({ username, email, password }) => {
    
    try {
      const data = await register({ username,email, password })
      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // console.log(error.response?.data)
        toast.error(error.response?.data ?? 'Error al registrar al usuario')
      } else {
        toast.error('Ocurrio un error inesperado')
      }

    }
  }
