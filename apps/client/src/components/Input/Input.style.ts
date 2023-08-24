import { css, type SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { type InputProps } from "./Input";

const scaleCSS: { [key: string]: SerializedStyles } = {
  default: css`
    width: 100%;
    height: 40px;
    font-size: 14px;
    padding: 0 16px;
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
  ${({ scale = "default" }) => scaleCSS[scale]}
  ${({ color = "default" }) => colorCSS[color]}
  ${({ shape = "default" }) => shapeCSS[shape]}
`;
