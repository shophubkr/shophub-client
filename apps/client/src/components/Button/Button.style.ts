import type { SerializedStyles } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type { ButtonProps } from "./Button";

const sizeCSS: { [key: string]: SerializedStyles } = {
  default: css`
    width: 150px;
  `,

  small: css`
    width: 64px;
    height: 40px;
  `,

  large: css`
    width: 100%;
    height: 48px;
  `,
};

const shapeCSS: { [key: string]: SerializedStyles } = {
  default: css`
    border-radius: 8px;
  `,
};

const colorCSS: { [key: string]: SerializedStyles } = {
  default: css`
    background: #eee;
  `,

  enabled: css`
    background: #ccc;
    color: #fff;
  `,

  none: css`
    background: #fff;
  `,
};

export const Button = styled("button")<ButtonProps>`
  ${({ size = "default" }) => sizeCSS[size]}
  ${({ shape = "default" }) => shapeCSS[shape]}
  ${({ color = "default" }) => colorCSS[color]}
`;
