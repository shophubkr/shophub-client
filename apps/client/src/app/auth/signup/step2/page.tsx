"use client";

import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Button from "~/Components/Button/Button";
import FormEle from "~/Components/FormElement/FormEle";
import RadioEle from "~/Components/FormElement/RadioEle";

export default function SignUpSecond() {
  const searchParams = new URLSearchParams(window.location.search);
  const userType = searchParams.get("userType");

  return (
    <S.Wrapper>
      <h3>회원 가입</h3>
      <form>
        <FormEle name="email" />
        <FormEle name="password" />
        <FormEle name="nickName" />
        {userType === "seller" && (
          <>
            <FormEle name="tel" />
            <FormEle name="businessNum" />
          </>
        )}
        <RadioContainer flexDirection="column">
          <RadioEle size="small" name="overAgeAgree">
            [필수] 만 14세 이상이며 모두 동의합니다.
          </RadioEle>
          <RadioEle size="small" name="sendAdsAgree">
            [선택] 광고성 정보 수신에 모두 동의합니다.
          </RadioEle>
        </RadioContainer>
        <S.StyledButton size="large" color="default" shape="default" type="submit" onClick={() => {}}>
          가입하기
        </S.StyledButton>
      </form>
    </S.Wrapper>
  );
}

const Wrapper = styled.section`
  width: 80%;
  max-width: 312px;

  & > h3 {
    text-align: center;
  }

  & > form {
    width: 100%;
    height: auto;
    margin-top: 80px;
  }
`;

const RadioContainer = styled(Flex)`
  row-gap: 8px;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const S = {
  Wrapper,
  RadioContainer,
  StyledButton,
};
