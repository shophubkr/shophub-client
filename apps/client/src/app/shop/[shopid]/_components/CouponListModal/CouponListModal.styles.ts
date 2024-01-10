import styled from "@emotion/styled";
import type { ShophubThemeProps } from "@shophub/theme";

export const Modal = styled.dialog`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Header = styled.header<{ theme: ShophubThemeProps }>`
  border-bottom: ${(props) => `1px solid ${props.theme.COLORS.grey[300]}`};
  font: ${(props) => props.theme.FONTS.h5};
  padding: 16px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Coupon = styled.li`
  position: relative;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 186px;
  padding: 40px;
`;

export const Summary = styled.div<{ theme: ShophubThemeProps }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${(props) => props.theme.COLORS.black};
  font: ${(props) => props.theme.FONTS.medium};
`;

export const Detail = styled.div<{ theme: ShophubThemeProps }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${(props) => props.theme.COLORS.grey[500]};
  font: ${(props) => props.theme.FONTS.p12r};
`;
