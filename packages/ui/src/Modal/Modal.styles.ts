import styled from "@emotion/styled";
import { colors } from "@shophub/theme/src/token";

export const Background = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.black};
  opacity: 0.5;
`;

export const Wrapper = styled.div`
  width: 234px;
  height: 234px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: ${colors.white};
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.0225);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 33px 38px;
`;

export const Icon = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  margin-bottom: 24px;
  white-space: normal;
  text-align: center;
  line-height: 21px;
`;

export const BtnWrap = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

/** 퍼블리싱용입니다. */
export const Button = styled.button`
  width: 80px;
  height: 32px;
  border-radius: 8px;
`;
