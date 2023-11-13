import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { signInSnsMediaArray } from "../../_constants/signInSns.mediaArray";

export const SnsAccountLogin = () => {
  const oAuthRedirect = async (type: string) => {
    const authUrl = "http://13.209.100.56/oauth2/authorization";

    window.location.href = `${authUrl}/${type}`;
  };

  return (
    <Box textAlign="center">
      <Heading as="h6" fontSize="16px">
        간편 로그인
      </Heading>
      <Flex h="48px" justifyContent="space-between" columnGap="9px" mt="24px">
        {signInSnsMediaArray.map((media) => (
          <Button w="100%" h="100%" onClick={() => oAuthRedirect(media.type)}>
            {media.title}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};
