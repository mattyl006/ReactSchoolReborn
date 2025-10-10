import { useState } from "react";
import { ThemeEnum } from "../contexts/ThemeContext/ThemeContext";

const useTheme = () => {
  const [theme, setTheme] = useState(ThemeEnum.LIGHT);
  const toggle = () => {
    if (theme === ThemeEnum.LIGHT) {
      setTheme(ThemeEnum.DARK);
    } else {
      setTheme(ThemeEnum.LIGHT);
    }
  };
  return { theme, toggle };
};

export default useTheme;
