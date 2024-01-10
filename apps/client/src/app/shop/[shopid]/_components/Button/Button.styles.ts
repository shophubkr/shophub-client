import styled from "@emotion/styled";

import type { ButtonStyleProps } from "./Button.types";

export const TinyButton = styled.button<ButtonStyleProps>`
  display: flex;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  font: ${(props) => props.theme.FONTS.small};
  background-color: ${(props) =>
    props.label === "share" ? props.theme.COLORS.grey[200] : props.theme.COLORS.primary[300]};
  &:active {
    background-color: ${(props) =>
      props.label === "share" ? props.theme.COLORS.grey[400] : props.theme.COLORS.primary[500]};
  }
`;

export const LargeButton = styled.button<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 8px;
  padding: 16px 24px;
  border-radius: 999px;
  font: ${(props) => props.theme.FONTS.medium};
  color: ${(props) => (props.label === "findWay" ? props.theme.COLORS.white : props.theme.COLORS.black)};
  background-color: ${(props) => (props.label === "findWay" ? props.theme.COLORS.black : props.theme.COLORS.grey[200])};
  &:active {
    background-color: ${(props) =>
      props.label === "findWay" ? props.theme.COLORS.grey[500] : props.theme.COLORS.grey[400]};
  }
`;
