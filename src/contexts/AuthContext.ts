import { createContext } from "react";
import React from "react";

type IAuthContext = {
  isLogged: boolean;
  toggleIsLogged: () => void;
};

const defaultValues = {
  isLogged: false,
  toggleIsLogged: () => null,
};

export const AuthContext: React.Context<IAuthContext> =
  createContext<IAuthContext>(defaultValues);

AuthContext.displayName = "AuthContext";
