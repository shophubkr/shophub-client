import type { HTMLAttributes, ReactNode } from "react";
import type { FONTS } from "@shophub/theme/src/token";

export type ShophubFontsKey = keyof typeof FONTS;

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  typo: ShophubFontsKey;
  color?: string;
  as?: keyof JSX.IntrinsicElements;
}

export type FontWeight = {
  light: 300;
  regular: 400;
  medium: 500;
  bold: 700;
};
