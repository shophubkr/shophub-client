import { extendTheme } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";
import type { SystemStyleObject } from "@chakra-ui/react";

export const useChakraTheme = () => {
  const FONT_THEME = useShophubTheme().FONTS;

  const convertFontsToTextStyles = () => {
    const textStyles: Record<string, SystemStyleObject> = {};
    Object.entries(FONT_THEME).forEach(([key, value]) => {
      const [fontStyle, fontWeight, fontSize, lineHeight] = value.split(/[\s/]+/);
      textStyles[key] = {
        fontStyle,
        fontWeight,
        fontSize,
        lineHeight,
      };
    });
    return textStyles;
  };

  const chakraTheme = extendTheme({
    fonts: {
      heading: "Spoqa Han Sans Neo, sans-serif",
      body: "Spoqa Han Sans Neo, sans-serif",
    },
    textStyles: {
      ...convertFontsToTextStyles(),
    },
  });

  return chakraTheme;
};
