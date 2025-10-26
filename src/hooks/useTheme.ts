import { useState } from "react";
import { ThemeEnum } from "../contexts/ThemeContext/ThemeContext";

const useTheme = () => {
  const [theme, setTheme] = useState(ThemeEnum.LIGHT);
  const toggle = () => {
    if (theme === ThemeEnum.LIGHT) {
      setTheme(ThemeEnum.DARK);
      document.body.classList.add("dark");
    } else {
      setTheme(ThemeEnum.LIGHT);
      document.body.classList.remove("dark");
    }
  };
  return { theme, toggle };
};

export default useTheme;
