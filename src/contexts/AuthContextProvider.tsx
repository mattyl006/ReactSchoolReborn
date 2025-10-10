import { AuthContext } from "./AuthContext";
import React from "react";

const useAuth = () => {
  const [logged, setIsLogged] = React.useState(false);
  const toggleIsLogged = () => setIsLogged((v) => !v);
  const logIn = () => setIsLogged(true);
  const logOut = () => setIsLogged(false);

  return { logged, toggleIsLogged, logIn, logOut };
};

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
