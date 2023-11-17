import { Center, Text } from "@chakra-ui/react";
import Link from "next/link";

export const JoinNavigationForUnknownUser = () => {
  return (
    <Center columnGap="8px">
      <Text>아직 회원이 아니신가요?</Text>
      <Link href="/auth/signup/step1">회원가입</Link>
    </Center>
  );
};
