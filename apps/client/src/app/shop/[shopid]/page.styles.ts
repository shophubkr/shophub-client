import styled from "@emotion/styled";
import type { ShophubThemeProps } from "@shophub/theme";

export const Divider = styled.hr<{ theme: ShophubThemeProps }>`
  height: 1px;
  background-color: ${(props) => props.theme.COLORS.grey[400]};
  border: 0;
`;
