import { css, type SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { type InputProps } from "./Input";

const scaleCSS: { [key: string]: SerializedStyles } = {
  default: css`
    height: 40px;
  `,

  small: css`
    width: 24px;
    height: 24px;
  `,
};

const colorCSS: { [key: string]: SerializedStyles } = {
  default: css`
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  `,
};

const shapeCSS: { [key: string]: SerializedStyles } = {
  default: css`
    border: none;
    border-radius: 8px;
    box-sizing: border-box;
  `,
};

export const Input = styled("input")<InputProps>`
  ${({ scale }) => scaleCSS[scale]}
  ${({ color }) => colorCSS[color]}
  ${({ shape }) => shapeCSS[shape]}
`;
