import { useContext } from "react";
import { ShophubTheme } from "../ThemeProvider";

export const useShophubTheme = () => {
  const context = useContext(ShophubTheme);

  return context;
};
