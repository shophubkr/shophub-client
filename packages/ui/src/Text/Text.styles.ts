import styled from "@emotion/styled";

import { FONTS } from "@shophub/theme/src/token";
import type { ShophubFontsKey } from "./Text.types";

export const createTextElement = (as: keyof JSX.IntrinsicElements, typo: ShophubFontsKey, color: string) => styled(as)<{
  typo: ShophubFontsKey;
  color: string;
}>`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  line-height: 1;
  font-size: ${FONTS[typo].size}px;
  font-weight: ${FONTS[typo].weight};
  color: ${color};
`;
