import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "@shophub/theme/src/theme";
import type { ButtonProps } from "./Button.types";

export const sizeCSS = {
  large: css({
    height: "48px",
  }),
  medium: css({
    height: "40px",
  }),
  small: css({
    height: "32px",
  }),
  tiny: css({
    height: "22px",
  }),
};

export const roundCSS = {
  default: css({
    borderRadius: "8px",
  }),
  none: css({
    borderRadius: "0",
  }),
  full: css({
    borderRadius: "999px",
  }),
};

export const variantCSS = (disabled = false) => ({
  primary: css({
    backgroundColor: !disabled ? `${theme.COLORS.primary[100]}` : `${theme.COLORS.primary[300]}`,
    color: `${theme.COLORS.white}`,
  }),
  black: css({
    backgroundColor: !disabled ? `${theme.COLORS.black}` : `${theme.COLORS.grey[200]}`,
    color: !disabled ? `${theme.COLORS.white}` : `${theme.COLORS.grey[100]}`,
  }),
  gray: css({
    backgroundColor: !disabled ? `${theme.COLORS.grey[300]}` : `${theme.COLORS.grey[200]}`,
    color: !disabled ? `${theme.COLORS.black}` : `${theme.COLORS.grey[100]}`,
  }),
  outline: css({
    backgroundColor: !disabled ? `${theme.COLORS.white}` : `${theme.COLORS.grey[200]}`,
    border: `1px solid ${theme.COLORS.grey[200]}`,
    color: !disabled ? `${theme.COLORS.black}` : `${theme.COLORS.grey[100]}`,
  }),
});

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  font-weight: 500;
  width: ${({ w = "100%" }) => w};
  ${({ size = "large" }) => sizeCSS[size]};
  ${({ round = "default" }) => roundCSS[round]};
  ${({ variant = "primary", disabled = false }) => variantCSS(disabled)[variant]};
`;
