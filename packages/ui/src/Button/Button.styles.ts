import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "@shophub/theme/src/theme";
import type { ButtonProps } from "./Button.types";

export const sizeCSS = {
  large: css`
    padding: 16px 0;
    column-gap: 8px;
  `,
  medium: css`
    padding: 13px 0;
    font-size: 14px;
    column-gap: 8px;
  `,
  small: css`
    padding: 9px 0;
    font-size: 14px;
    column-gap: 8px;
  `,
  tiny: css`
    padding: 4px 8px;
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
  full: css`
    border-radius: 999px;
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