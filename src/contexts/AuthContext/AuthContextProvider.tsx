import useAuth from "../../hooks/useAuth";
import { AuthContext } from "./AuthContext";
import React from "react";

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { logged, toggleIsLogged, logIn, logOut } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLogged: logged,
        toggleIsLogged: toggleIsLogged,
        logIn: logIn,
        logOut: logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
