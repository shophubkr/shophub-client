import styled from "@emotion/styled";
import { theme } from "@shophub/theme/src/theme";

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export const Wrapper = styled.div<{ disabled?: boolean; isFocus?: boolean }>`
  width: 100%;
  border: ${({ disabled = false }) => (!disabled ? `1px solid ${theme.COLORS.grey[200]};` : "none")};
  background-color: ${({ disabled = false }) => disabled && theme.COLORS.grey["300"]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 16px;
  transition: box-shadow 0.3s ease;

  ${({ isFocus = false }) => isFocus && "box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)"};

  &:hover {
    box-shadow: ${({ disabled = false }) => !disabled && `0 0 5px rgba(0, 0, 0, 0.1)`};
  }
`;

export const LengthText = styled.div`
  width: 37px;
  font-size: 14px;
  font-weight: 400;
  color: ${theme.COLORS.grey["800"]};
`;
