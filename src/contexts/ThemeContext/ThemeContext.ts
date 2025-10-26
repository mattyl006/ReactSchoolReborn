import { createContext } from "react";

export enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
}

type IThemeContext = {
  theme: React.MutableRefObject<ThemeEnum>;
  toggle: () => void;
};

export const ThemeContext: React.Context<IThemeContext | null> =
  createContext<IThemeContext | null>(null);

ThemeContext.displayName = "ThemeContext";
