"use client";

import { API_LOGIN } from "@auth/_state/server";
import type { SignInFormValues } from "@auth/_types";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { ACCESS_TOKEN_KEY } from "~/app/shared/server/constants";
import { JoinNavigationForUnknownUser, ShopHubAccountLogin, SnsAccountLogin } from "./_components";

const Login = () => {
  const { control, handleSubmit } = useForm<SignInFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitHandler = async (data: SignInFormValues) => {
    const { email, password } = data;

    try {
      // TODO: 아래는 임시용 입니다. 추후 수정이 필요합니다.
      const data = await API_LOGIN.Request({ email, password });
      Cookies.set(ACCESS_TOKEN_KEY, data.accessToken); // 쿠키에 accessToken set
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center flexDirection="column" w="80%" maxW="312px" margin="80px auto" rowGap="80px">
      <Box textAlign="center">
        <Text>입어보고 사자</Text>
        <Heading as="h3" fontSize="24px">
          SHOPHUB
        </Heading>
      </Box>
      <Flex flexDir="column" w="100%" rowGap="80px">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <ShopHubAccountLogin control={control} name="shopHub" />
        </form>
        <Flex flexDir="column" rowGap="48px">
          <SnsAccountLogin />
          <JoinNavigationForUnknownUser />
        </Flex>
      </Flex>
    </Center>
  );
};

export default Login;
