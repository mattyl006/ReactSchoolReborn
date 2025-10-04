import { createContext } from "react";

const defaultValues = {
  isLogged: false,
};

type IAuthContext = typeof defaultValues;

export const AuthContext = createContext<IAuthContext>(defaultValues);
