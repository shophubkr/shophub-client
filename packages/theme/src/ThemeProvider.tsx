"use client";

import { createContext, type PropsWithChildren } from "react";
import { theme } from "./theme";
import type { ShophubThemeProps } from "./theme.types";

export const ShophubTheme = createContext<ShophubThemeProps>(theme);

export const ThemeProvider = ({ children }: PropsWithChildren<ShophubThemeProps>) => {
  return <ShophubTheme.Provider value={theme}>{children}</ShophubTheme.Provider>;
};
