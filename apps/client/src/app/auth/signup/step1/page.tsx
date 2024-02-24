"use client";

import type { UserType } from "@auth/_types";
import { Button, Center, Heading } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";
import Link from "next/link";
import { useState } from "react";
import { ChoiceUserType } from "./_components/ChoiceUserType";

const SignUpFirst = () => {
  const [userChoice, setUserChoice] = useState<UserType>();
  const theme = useShophubTheme();

  return (
    <Center w="full" flexDir="column">
      <Heading as="h3" fontSize="24px">
        회원 유형
      </Heading>
      <ChoiceUserType userChoice={userChoice as UserType} setUserChoice={setUserChoice} theme={theme} />
      <Link
        href={{ pathname: userChoice && "/auth/signup/step2", query: { userType: userChoice } }}
        style={{ width: "100%", marginTop: "48px" }}
      >
        <Button
          w="full"
          h="48px"
          bgColor={userChoice ? theme.COLORS.primary[100] : theme.COLORS.grey[100]}
          color={userChoice ? theme.COLORS.white : theme.COLORS.grey[400]}
        >
          다음으로 가기
        </Button>
      </Link>
    </Center>
  );
};

export default SignUpFirst;
