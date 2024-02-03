"use client";

import type { UserType } from "@auth/_types";
import { Button, Center, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { ChoiceUserType } from "./_components/ChoiceUserType";

const SignUpFirst = () => {
  const [userChoice, setUserChoice] = useState<UserType>();

  return (
    <Center w="full" flexDir="column">
      <Heading as="h3" fontSize="24px">
        회원 유형
      </Heading>
      <ChoiceUserType userChoice={userChoice as UserType} setUserChoice={setUserChoice} />
      <Link
        href={{ pathname: userChoice && "/auth/signup/step2", query: { userType: userChoice } }}
        style={{ width: "100%" }}
      >
        <Button mt="48px" w="full" h="48px">
          다음으로 가기
        </Button>
      </Link>
    </Center>
  );
};

export default SignUpFirst;
