"use client";

import { createContext, type PropsWithChildren } from "react";
import { theme } from "./theme";
import type { ShophubThemeType } from ".";

export const ShophubTheme = createContext<ShophubThemeType>(theme);

export const ThemeProvider = ({ children }: PropsWithChildren<ShophubThemeType>) => {
  return <ShophubTheme.Provider value={theme}>{children}</ShophubTheme.Provider>;
};
