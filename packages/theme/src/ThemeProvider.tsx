"use client";

import { type Theme } from "@emotion/react";
import { createContext, type PropsWithChildren } from "react";
import { THEME } from "./theme";

type CSRProps = {
  theme?: Partial<Theme> | ((outerTheme: Theme) => Theme);
};

export const ShophubTheme = createContext<Theme>(THEME);

export const ThemeProvider = ({ children, theme: customTheme }: PropsWithChildren<CSRProps>) => {
  return <ShophubTheme.Provider value={customTheme || THEME}>{children}</ShophubTheme.Provider>;
};
