import { createContext } from "react";
import React from "react";

type IAuthContext = {
  isLogged: boolean;
  toggleIsLogged: () => void;
  logIn: () => void;
  logOut: () => void;
};

export const AuthContext: React.Context<IAuthContext | null> =
  createContext<IAuthContext | null>(null);

AuthContext.displayName = "AuthContext";
