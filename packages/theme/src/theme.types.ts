import type { COLORS } from "./token/colors";
import type { FONTS } from "./token/fonts";

export interface ShophubTheme {
  COLORS: typeof COLORS;
  FONTS: typeof FONTS;
}
