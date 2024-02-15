"use client";

import { COLORS } from "@shophub/theme/src/token";
import { StyledButton } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button = ({ iconNamed, iconSized = 16, children, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {iconNamed && (
        <span
          className="material-icons-outlined"
          style={{
            color: props.variant === "outline" && !props.disabled ? COLORS.primary[200] : "",
            fontSize: `${iconSized}px`,
          }}
        >
          {iconNamed}
        </span>
      )}
      {children}
    </StyledButton>
  );
};
