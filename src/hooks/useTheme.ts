import { useEffect, useRef } from "react";
import { ThemeEnum } from "../contexts/ThemeContext/ThemeContext";
import getMode from "../components/AuthInfo/components/ThemeSwitcher/getMode";

const useTheme = () => {
  const theme: React.MutableRefObject<ThemeEnum | null> =
    useRef<ThemeEnum | null>(getMode());

  useEffect(() => {
    const themeMode: ThemeEnum | null = getMode();
    if (themeMode === ThemeEnum.DARK) {
      document.body.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    if (theme.current === ThemeEnum.DARK) {
      theme.current = ThemeEnum.LIGHT;
      document.body.classList.remove("dark");
    } else {
      theme.current = ThemeEnum.DARK;
      document.body.classList.add("dark");
    }
  };
  return { theme, toggle };
};

export default useTheme;
