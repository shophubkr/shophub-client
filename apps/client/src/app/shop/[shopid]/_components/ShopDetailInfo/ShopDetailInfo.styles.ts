import styled from "@emotion/styled";
import type { ShophubThemeProps } from "@shophub/theme";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px 0;
`;

export const Info = styled.li<{ theme: ShophubThemeProps }>`
  display: flex;
  align-items: center;
  gap: 4px;
  font: ${(props) => props.theme.FONTS.p14r};
  color: ${(props) => props.theme.COLORS.black};
`;

export const CopyButton = styled.button<{ theme: ShophubThemeProps }>`
  display: flex;
  gap: 2px;
  margin-left: 4px;
  font: ${(props) => props.theme.FONTS.p12r};
`;
