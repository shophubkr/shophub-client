"use client";

import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "~/components";
import * as S from "./page.style";

const SignUpFirst = () => {
  const [userChoice, setUserChoice] = useState<"buyer" | "seller" | null>(null);

  const onUserType = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { innerText } = e.target as HTMLButtonElement;

    if (innerText.includes("매장 손님") || innerText.includes("바이어")) {
      setUserChoice("buyer");
    }

    if (innerText.includes("매장 주인") || innerText.includes("셀러")) {
      setUserChoice("seller");
    }
  };

  return (
    <S.Wrapper>
      <h3>회원 유형</h3>
      <S.UserTypeContainer columnGap="8px" mt="80px">
        <S.StyledButton onClick={onUserType} color={userChoice === "buyer" ? "default" : "none"}>
          <Box>
            <h4>바이어</h4>
            <Flex justify="center" alignItems="center" mt="8px">
              <div className="material-icons">shopping_bag</div>
              <p>매장 손님</p>
            </Flex>
          </Box>
        </S.StyledButton>
        <S.StyledButton onClick={onUserType} color={userChoice === "seller" ? "default" : "none"}>
          <Box>
            <h4>셀러</h4>
            <Flex justify="center" alignItems="center" mt="8px">
              <div className="material-icons">sell</div>
              <p>매장 주인</p>
            </Flex>
          </Box>
        </S.StyledButton>
      </S.UserTypeContainer>
      <Link href={{ pathname: "/auth/signup/step2", query: { userType: userChoice } }}>
        <Button size="large" disabled={userChoice === null}>
          다음으로 가기
        </Button>
      </Link>
    </S.Wrapper>
  );
};

export default SignUpFirst;
