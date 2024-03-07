import type { PropsWithChildren } from "react";
import type { FONTS } from "@shophub/theme/src/token";

export type ShophubFontsKey = keyof typeof FONTS;

export interface TextProps extends PropsWithChildren {
  typo: ShophubFontsKey;
  color?: string;
  as?: keyof JSX.IntrinsicElements;
}
