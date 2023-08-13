"use client";

import { Box, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";
import Button from "~/Components/Button/Button";

export default function SignUpFirst() {
  const [choiceUser, setChoiceUser] = useState({ userType: "" });

  const onUserType = (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { innerText } = e.target as HTMLButtonElement;

    if (innerText === "매장 손님" || innerText === "바이어") {
      setChoiceUser({
        userType: "buyer",
      });
    }

    if (innerText === "매장 주인" || innerText === "셀러") {
      setChoiceUser({
        userType: "seller",
      });
    }
  };

  return (
    <S.Wrapper>
      <h3>회원 유형</h3>
      <UserTypeContainer columnGap="8px" mt="80px">
        <S.StyledButton size="default" color={choiceUser?.userType === "buyer" ? "enabled" : "default"} shape="default">
          <Box>
            <h4>바이어</h4>
            <Flex justify="center" alignItems="center" mt="8px">
              <div className="material-icons">shopping_bag</div>
              <p>매장 손님</p>
            </Flex>
          </Box>
        </S.StyledButton>
        <S.StyledButton
          size="default"
          color={choiceUser?.userType === "seller" ? "enabled" : "default"}
          shape="default"
        >
          <Box>
            <h4>셀러</h4>
            <Flex justify="center" alignItems="center" mt="8px">
              <div className="material-icons">sell</div>
              <p>매장 주인</p>
            </Flex>
          </Box>
        </S.StyledButton>
      </UserTypeContainer>
      <Link
        href={{ pathname: "/auth/signup/step2", query: { userType: choiceUser?.userType } }}
        as="/auth/signup/step2"
      >
        <Button size="large" color="default" shape="default" disabled={choiceUser?.userType === ""}>
          다음으로 가기
        </Button>
      </Link>
    </S.Wrapper>
  );
}

const Wrapper = styled.section`
  width: 80%;
  max-width: 312px;

  & > h3 {
    text-align: center;
  }
`;

const UserTypeContainer = styled(Flex)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 149px;
  margin-top: 0;
  background: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
`;

const S = {
  Wrapper,
  UserTypeContainer,
  StyledButton,
};
