import { useRef } from "react";
import { ThemeEnum } from "../contexts/ThemeContext/ThemeContext";

const useTheme = () => {
  const theme: React.MutableRefObject<ThemeEnum> = useRef<ThemeEnum>(
    ThemeEnum.LIGHT
  );
  const toggle = () => {
    if (theme.current === ThemeEnum.LIGHT) {
      theme.current = ThemeEnum.DARK;
      document.body.classList.add("dark");
    } else {
      theme.current = ThemeEnum.LIGHT;
      document.body.classList.remove("dark");
    }
  };
  return { theme, toggle };
};

export default useTheme;
