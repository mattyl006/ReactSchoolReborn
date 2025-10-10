import React from "react";
import { ThemeContext } from "./ThemeContext";
import useTheme from "../../hooks/useTheme";

const ThemeContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
