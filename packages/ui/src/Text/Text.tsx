import { createTextElement } from "./Text.styles";
import type { TextProps } from "./Text.types";

export const Text = ({ typo, as = "span", color = "black", children, ...props }: TextProps) => {
  const TextElement = createTextElement(as, typo, color);

  return (
    <TextElement as={as} typo={typo} color={color} {...props}>
      {children}
    </TextElement>
  );
};
