import type { Dispatch, SetStateAction } from "react";
import type { UserSchema } from "./user";

export interface AuthContextType {
  user: UserSchema | null,
  setUser: Dispatch<SetStateAction<UserSchema | null>>,
  loading:boolean
}