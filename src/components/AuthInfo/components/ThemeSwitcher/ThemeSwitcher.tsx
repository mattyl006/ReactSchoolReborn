import React, { useState } from "react";
import useThemeContext from "../../../../hooks/useThemeContext";
import Button from "../../../Button";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { ThemeEnum } from "../../../../contexts/ThemeContext/ThemeContext";
import getMode from "./getMode";

type ThemeSwitcherProps = { className?: string };

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const [theme, setTheme] = useState<ThemeEnum | null>(getMode());
  const { toggle } = useThemeContext();

  const handleClick = () => {
    toggle();
    setTheme((theme) =>
      theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT
    );
  };

  return (
    <Button onClick={handleClick} className={props.className}>
      {theme === ThemeEnum.LIGHT ? (
        <MoonIcon className="w-6 h-6" />
      ) : (
        <SunIcon className="w-6 h-6" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
