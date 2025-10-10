import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw Error("This component should be wrapped by AuthContextProvider");
  }
  return context;
};

export default useAuthContext;
