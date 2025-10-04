import { createContext } from "react";

type IAuthContext = {
  isLogged: boolean;
  toggleIsLogged: () => void;
};

const defaultValues = {
  isLogged: false,
  toggleIsLogged: () => null,
};

export const AuthContext = createContext<IAuthContext>(defaultValues);

AuthContext.displayName = "AuthContext";
