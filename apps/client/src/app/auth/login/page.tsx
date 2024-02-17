"use client";

import { LOGIN_SCHEMA } from "@auth/_constants";
import type { SignInFormValues } from "@auth/_types";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { usePostLogin } from "../_state/server/hooks";
import { JoinNavigationForUnknownUser, ShopHubAccountLogin, SnsAccountLogin } from "./_components";

const Login = () => {
  const { control, handleSubmit } = useForm<SignInFormValues>({
    resolver: yupResolver(LOGIN_SCHEMA),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate } = usePostLogin();

  const handleSubmitHandler = async (submitData: SignInFormValues) => {
    mutate(submitData);
  };

  return (
    <Center flexDirection="column" w="312px" margin="0 auto" rowGap="64px">
      <Box textAlign="center">
        <Text fontSize="16px">입어보고 사자</Text>
        <Heading as="h3">SHOPHUB</Heading>
      </Box>
      <Flex flexDir="column" w="full" rowGap="80px">
        <form onSubmit={handleSubmit(handleSubmitHandler)}>
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
