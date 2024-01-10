import styled from "@emotion/styled";
import Link from "next/link";

import type { ShophubThemeProps } from "@shophub/theme";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: 172px 172px;
  gap: 24px 12px;
  margin-top: 16px;
`;

export const Item = styled(Link)``;

export const Name = styled.h6<{ theme: ShophubThemeProps }>`
  width: calc(100% - 50px);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font: ${(props) => props.theme.FONTS.h6};
  color: ${(props) => props.theme.COLORS.black};
`;

export const Category = styled.p<{ theme: ShophubThemeProps }>`
  width: 50px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font: ${(props) => props.theme.FONTS.p12m};
  color: ${(props) => props.theme.COLORS.grey[400]};
`;

export const Description = styled.p<{ theme: ShophubThemeProps }>`
  margin: 8px 0 16px 0;
  font: ${(props) => props.theme.FONTS.h6p};
  color: ${(props) => props.theme.COLORS.black};
`;

export const Price = styled.p<{ theme: ShophubThemeProps }>`
  font: ${(props) => props.theme.FONTS.p14m};
  color: ${(props) => props.theme.COLORS.black};
`;
