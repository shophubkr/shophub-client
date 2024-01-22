import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type { SizeProps } from "./Card.types";

export const containerCSS = {
  small: css`
    display: flex;
    width: 358px;
    column-gap: 16px;
  `,
  medium: css`
    display: grid;
    grid-template-columns: 96px 1fr;
    grid-template-rows: auto;
    width: 358px;
    gap: 16px;
  `,
  large: css`
    display: flex;
    flex-direction: column;
    width: 172px;
    row-gap: 24px;
  `,
};

export const imgCSS = {
  small: css`
    width: 72px;
    height: 72px;
  `,
  medium: css`
    width: 96px;
    height: 96px;
  `,
  large: css`
    width: 172px;
    height: 172px;
  `,
};

export const Container = styled.li<SizeProps>`
  position: relative;
  ${({ size = "small" }) => containerCSS[size]}
`;

export const Image = styled.img<SizeProps>`
  border-radius: 8px;
  ${({ size = "small" }) => imgCSS[size]}
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  flex: 1;
`;

export const Title = styled.h4`
  font-size: 16px;
  font-weight: 700;
`;

export const Coupon = styled.p`
  font-size: 14px;
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Category = styled.p`
  font-size: 12px;
  font-weight: 500;
`;

export const Content = styled.p<SizeProps>`
  font-size: 14px;
  font-weight: 300;
  ${({ size }) =>
    size === "medium" &&
    css`
      padding-bottom: 20px;
    `}
`;

export const Distance = styled.p`
  font-size: 14px;
  font-weight: 300;
  &::after {
    content: "|";
    margin: 0 2px;
  }
`;

export const MethodAndTime = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const Price = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const Address = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
