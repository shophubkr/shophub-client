import type { ButtonHTMLAttributes } from "react";
import type { sizeCSS, roundCSS, colorCSS } from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof sizeCSS;
  round?: keyof typeof roundCSS;
  color?: keyof ReturnType<typeof colorCSS>;
  w?: string;
}
