import React from "react";
import useThemeContext from "../../hooks/useThemeContext";
import Button from "../Button";

type ThemeSwitcherProps = { className?: string };

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { toggle } = useThemeContext();

  return (
    <Button onClick={toggle} className={props.className}>
      Theme Switcher
    </Button>
  );
};

export default ThemeSwitcher;
