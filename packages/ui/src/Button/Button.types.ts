import type { ButtonHTMLAttributes } from "react";
import type { sizeCSS, roundCSS, variantCSS } from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof sizeCSS;
  round?: keyof typeof roundCSS;
  variant?: keyof ReturnType<typeof variantCSS>;
  w?: string; // width
  iconNamed?: string;
}
