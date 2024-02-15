import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "@shophub/theme/src/theme";
import type { ButtonProps } from "./Button.types";

export const sizeCSS = {
  large: css`
    height: 48px;
    column-gap: 8px;
  `,
  medium: css`
    height: 40px;
    font-size: 14px;
    column-gap: 8px;
  `,
  small: css`
    height: 32px;
    font-size: 14px;
    column-gap: 8px;
  `,
  tiny: css`
    padding: 0 8px;
    height: 22px;
    font-size: 14px;
    column-gap: 4px;
  `,
};

export const roundCSS = {
  default: css`
    border-radius: 8px;
  `,
  none: css`
    border-radius: 0px;
  `,
  pill: css`
    border-radius: 999px;
  `,
  full: css`
    border-radius: 50%;
  `,
};

export const variantCSS = (disabled = false) => ({
  primary: css`
    background-color: ${!disabled ? theme.COLORS.primary[100] : theme.COLORS.grey[300]};
    color: ${!disabled ? theme.COLORS.white : theme.COLORS.grey[200]};
  `,
  black: css`
    background-color: ${!disabled ? theme.COLORS.black : theme.COLORS.grey[300]};
    color: ${!disabled ? theme.COLORS.white : theme.COLORS.grey[200]};
  `,
  gray: css`
    background-color: ${!disabled ? theme.COLORS.grey[300] : theme.COLORS.grey[300]};
    color: ${!disabled ? theme.COLORS.black : theme.COLORS.grey[200]};
  `,
  outline: css`
    background-color: ${!disabled ? theme.COLORS.white : theme.COLORS.grey[300]};
    border: ${!disabled ? `1px solid ${theme.COLORS.grey[200]}` : "none"};
    color: ${!disabled ? theme.COLORS.black : theme.COLORS.grey[200]};
  `,
});

export const variantToIconColor = (disabled = false) => ({
  primary: css`
    color: ${!disabled ? theme.COLORS.white : theme.COLORS.grey[200]};
  `,
  black: css`
    color: ${!disabled ? theme.COLORS.white : theme.COLORS.grey[100]};
  `,
  gray: css`
    color: ${!disabled ? theme.COLORS.black : theme.COLORS.grey[100]};
  `,
  outline: css`
    color: ${!disabled ? theme.COLORS.primary[100] : theme.COLORS.grey[200]};
  `,
});

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  width: ${({ w = "100%" }) => w};
  ${({ size = "large" }) => sizeCSS[size]};
  ${({ round = "default" }) => roundCSS[round]};
  ${({ variant = "primary", disabled = false }) => variantCSS(disabled)[variant]};
`;
