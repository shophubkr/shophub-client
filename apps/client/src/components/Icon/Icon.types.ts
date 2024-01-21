import type { ShophubThemeProps } from "@shophub/theme";

export interface IconProps {
  name: string;
  size?: number;
  color?: Pick<ShophubThemeProps, "COLORS"> | string;
}
