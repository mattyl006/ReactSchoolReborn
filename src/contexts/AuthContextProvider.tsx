import { AuthContext } from "./AuthContext";
import React from "react";

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [logged, setIsLogged] = React.useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLogged: logged,
        toggleIsLogged: () => setIsLogged((value) => !value),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
