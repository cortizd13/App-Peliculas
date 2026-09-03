import { login, register } from "./auth";
import axios from "axios";
import { toast } from "sonner";
import type { UserLoginSchema, UserSchema } from "../types/user";

export const createUser = async ({ username, email, password }:UserSchema) => {
  
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

export const loginUser = async ({ email, password }:UserLoginSchema) => {
  try {
    const data = await login({ email, password })
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // console.log(error.response?.data)
      toast.error(error.response?.data ?? 'Error al Ingresar')
    } else {
      toast.error('Ocurrio un error inesperado')
    }
  }
}