import type { COLORS } from "./token/colors";
import type { FONTS } from "./token/fonts";

export interface ShophubThemeProps {
  COLORS: typeof COLORS;
  FONTS: typeof FONTS;
}
