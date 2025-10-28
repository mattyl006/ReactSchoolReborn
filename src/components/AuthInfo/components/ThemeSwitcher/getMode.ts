import { ThemeEnum } from "../../../../contexts/ThemeContext/ThemeContext";

const getMode = () => {
  if (window.matchMedia) {
    const matchesLightMode: boolean = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    return matchesLightMode ? ThemeEnum.LIGHT : ThemeEnum.DARK;
  }
  return null;
};

export default getMode;
