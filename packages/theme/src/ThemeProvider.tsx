"use client";

import { type Theme } from "@emotion/react";
import { createContext, type PropsWithChildren } from "react";
import { theme } from "./theme";

type CSRProps = {
  theme?: Partial<Theme> | ((outerTheme: Theme) => Theme);
};

export const ShophubTheme = createContext<Theme>(theme);

export const ThemeProvider = ({ children, theme: customTheme }: PropsWithChildren<CSRProps>) => {
  return <ShophubTheme.Provider value={customTheme || theme}>{children}</ShophubTheme.Provider>;
};
