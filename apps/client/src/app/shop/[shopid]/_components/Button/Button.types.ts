import type { ButtonHTMLAttributes } from "react";
import type { ShophubThemeProps } from "@shophub/theme";

export type LabelType = "share" | "follow" | "findWay" | "viewMap";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "tiny" | "large";
  label: LabelType;
}

export interface ButtonStyleProps {
  label: LabelType;
  theme: ShophubThemeProps;
}
