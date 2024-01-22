"use client";

import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import * as S from "./page.style";

const SignUpFirst = () => {
  const [userChoice, setUserChoice] = useState<"buyer" | "seller">();

  const onClickUserType = (user: "buyer" | "seller") => {
    setUserChoice(user);
  };

  return (
    <S.Wrapper w="full" flexDir="column">
      <Heading as="h3" fontSize="24px">
        회원 유형
      </Heading>
      <Flex w="full" h="149px" columnGap="8px" mt="80px">
        <S.StyledButton
          onClick={() => onClickUserType("buyer")}
          colorScheme={userChoice === "buyer" ? "facebook" : "gray"}
          flexDir="column"
        >
          <Heading as="h4" fontSize="20px">
            바이어
          </Heading>
          <Flex justify="center" alignItems="center" mt="8px" gap="4px">
            <Text className="material-icons-outlined">shopping_bag</Text>
            <Text fontSize="14px">매장 손님</Text>
          </Flex>
        </S.StyledButton>
        <S.StyledButton
          onClick={() => onClickUserType("seller")}
          colorScheme={userChoice === "seller" ? "facebook" : "gray"}
          flexDir="column"
        >
          <Heading as="h4" fontSize="20px">
            셀러
          </Heading>
          <Flex justify="center" alignItems="center" mt="8px" gap="4px">
            <Text className="material-icons-outlined">sell</Text>
            <Text fontSize="14px">매장 주인</Text>
          </Flex>
        </S.StyledButton>
      </Flex>
      <Link href={{ pathname: "/auth/signup/step2", query: { userType: userChoice } }} style={{ width: "100%" }}>
        <Button mt="48px" w="full" h="48px" disabled={userChoice === null}>
          다음으로 가기
        </Button>
      </Link>
    </S.Wrapper>
  );
};

export default SignUpFirst;
