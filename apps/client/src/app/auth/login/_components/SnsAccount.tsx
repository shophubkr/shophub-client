import { Box, Flex, Text } from "@chakra-ui/react";
import { HorizontalLine, ImageBox } from "~/components";

export const SnsAccountLogin = () => {
  return (
    <Box textAlign="center">
      <Flex alignItems="center" columnGap="6px">
        <HorizontalLine h="1px" />
        <Text w="full" fontSize="16px">
          간편 로그인
        </Text>
        <HorizontalLine h="1px" />
      </Flex>
      <Flex h="48px" justifyContent="center" columnGap="20px" mt="24px">
        <ImageBox src="/img/oauth_naver.png" alt="oAuthNaverLogo" boxSize="48px" />
        <ImageBox src="/img/oauth_google.png" alt="oAuthGoogleLogo" boxSize="48px" />
      </Flex>
    </Box>
  );
};
