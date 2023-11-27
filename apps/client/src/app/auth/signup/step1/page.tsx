"use client";

import { Button, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { ChoiceUserType } from "./_components/ChoiceUserType";
import * as Styled from "./page.style";

const SignUpFirst = () => {
  const [userChoice, setUserChoice] = useState<"USER_BUYER" | "USER_SELLER">();

  return (
    <Styled.Wrapper w="100%" flexDir="column">
      <Heading as="h3" fontSize="24px">
        회원 유형
      </Heading>
      <Flex w="100%" h="149px" columnGap="8px" mt="80px">
        <ChoiceUserType userChoice={userChoice} setUserChoice={setUserChoice} />
      </Flex>
      <Link
        href={{ pathname: userChoice && "/auth/signup/step2", query: { userType: userChoice } }}
        style={{ width: "100%" }}
      >
        <Button mt="48px" w="100%" h="48px">
          다음으로 가기
        </Button>
      </Link>
    </Styled.Wrapper>
  );
};

export default SignUpFirst;
