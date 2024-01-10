import styled from "@emotion/styled";

import type { ShophubThemeProps } from "@shophub/theme";

export const LogoImageWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  & > img {
    border-radius: 50%;
  }
`;

export const Name = styled.h4<{ theme: ShophubThemeProps }>`
  color: ${(props) => props.theme.COLORS.black};
  font: ${(props) => props.theme.FONTS.h4};
`;

export const Level = styled.p<{ theme: ShophubThemeProps }>`
  color: ${(props) => props.theme.COLORS.grey[500]};
  font: ${(props) => props.theme.FONTS.p14m};
`;

export const Description = styled.p<{ theme: ShophubThemeProps }>`
  color: ${(props) => props.theme.COLORS.black};
  font: ${(props) => props.theme.FONTS.h4p};
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
