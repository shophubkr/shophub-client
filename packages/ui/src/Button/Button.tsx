"use client";

import { StyledButton } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button = ({ ...props }: ButtonProps) => {
  return <StyledButton {...props} />;
};
