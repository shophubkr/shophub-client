import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Campaign() {
  return (
    <Flex justifyContent="center" mt="48px">
      <Text mr="4px">아직 회원이 아니신가요?</Text>
      <Link href="/auth/signup/step1">
        <Text>회원가입</Text>
      </Link>
    </Flex>
  );
}
