import styled from "@emotion/styled";

import { FONTS } from "@shophub/theme/src/token";
import type { FontWeight, ShophubFontsKey } from "./Text.types";

const fontWeightMap: FontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

const getFontWeight = (weight: keyof FontWeight) => {
  return fontWeightMap[weight];
};

const typoSize = (typo: ShophubFontsKey) => `${FONTS[typo].size}px`;
const typoWeight = (typo: ShophubFontsKey) => `${getFontWeight(FONTS[typo].weight)}`;

export const createTextElement = (as: keyof JSX.IntrinsicElements, typo: ShophubFontsKey, color: string) => styled(as)<{
  typo: ShophubFontsKey;
  color: string;
}>`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  line-height: 1;
  font-size: ${typoSize(typo)};
  font-weight: ${typoWeight(typo)};
  color: ${color};
`;
