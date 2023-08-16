import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Button from "~/components/Button/Button";

export function SnsAccount() {
  return (
    <S.Wrapper>
      <h6>간편 로그인</h6>
      <Flex columnGap="8px">
        <Button size="large">
          <a href="https://naver.com">네이버</a>
        </Button>
        <Button size="large">
          <a href="https://kakao.com">카카오</a>
        </Button>
        <Button size="large">
          <a href="https://google.com">구글</a>
        </Button>
      </Flex>
    </S.Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  margin-top: 80px;
`;

const S = {
  Wrapper,
};
