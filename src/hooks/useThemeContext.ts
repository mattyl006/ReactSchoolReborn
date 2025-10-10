import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext/ThemeContext";

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw Error("This component should be inside ThemeContextProvider");
  }
  return context;
};

export default useThemeContext;
