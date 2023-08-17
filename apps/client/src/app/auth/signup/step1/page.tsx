"use client";

import { Box, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import React, { useState } from "react";
import Button from "~/components/Button/Button";

export default function SignUpFirst() {
  const [choiceUser, setChoiceUser] = useState<string>("");

  const onUserType = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { innerText } = e.target as HTMLButtonElement;

    if (innerText.includes("매장 손님") || innerText.includes("바이어")) {
      setChoiceUser("buyer");
    }

    if (innerText.includes("매장 주인") || innerText.includes("셀러")) {
      setChoiceUser("seller");
    }
  };

  return (
    <S.Wrapper>
      <h3>회원 유형</h3>
      <S.UserTypeContainer columnGap="8px" mt="80px">
        <S.StyledButton onClick={onUserType} color={choiceUser === "buyer" ? "default" : "none"}>
          <Box>
            <h4>바이어</h4>
            <Flex justify="center" alignItems="center" mt="8px">
              <div className="material-icons">shopping_bag</div>
              <p>매장 손님</p>
            </Flex>
          </Box>
        </S.StyledButton>
        <S.StyledButton onClick={onUserType} color={choiceUser === "seller" ? "default" : "none"}>
          <Box>
            <h4>셀러</h4>
            <Flex justify="center" alignItems="center" mt="8px">
              <div className="material-icons">sell</div>
              <p>매장 주인</p>
            </Flex>
          </Box>
        </S.StyledButton>
      </S.UserTypeContainer>
      <Link href={{ pathname: "/auth/signup/step2", query: { userType: choiceUser } }}>
        <Button size="large" disabled={choiceUser === ""}>
          다음으로 가기
        </Button>
      </Link>
    </S.Wrapper>
  );
}

const Wrapper = styled.section`
  width: 80%;
  max-width: 312px;
  text-align: center;
`;

const UserTypeContainer = styled(Flex)`
  width: 100%;
  height: 149px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 149px;
  margin-top: 0;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
`;

const S = {
  Wrapper,
  UserTypeContainer,
  StyledButton,
};
