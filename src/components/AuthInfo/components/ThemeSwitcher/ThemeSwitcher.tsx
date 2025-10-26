import React from "react";
import useThemeContext from "../../../../hooks/useThemeContext";
import Button from "../../../Button";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { ThemeEnum } from "../../../../contexts/ThemeContext/ThemeContext";

type ThemeSwitcherProps = { className?: string };

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { toggle, theme } = useThemeContext();

  return (
    <Button onClick={toggle} className={props.className}>
      {theme.current === ThemeEnum.LIGHT ? (
        <MoonIcon className="w-6 h-6" />
      ) : (
        <SunIcon className="w-6 h-6" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
