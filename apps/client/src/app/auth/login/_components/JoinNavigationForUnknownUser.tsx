import { Center, Text } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";
import Link from "next/link";

export const JoinNavigationForUnknownUser = () => {
  const theme = useShophubTheme();

  return (
    <Center columnGap="8px">
      <Text>아직 회원이 아니신가요?</Text>
      <Link href="/auth/signup/step1">
        <Text fontSize="16px" fontWeight="bold" color={theme.COLORS.primary[100]}>
          회원가입
        </Text>
      </Link>
    </Center>
  );
};
