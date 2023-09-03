"use client";

import { CheckBox, FormElement } from "@auth/_components";
import type { FormValues } from "@auth/_types/types";
import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { LoginApi } from "../_state/server/api";

const Login = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      isAutoLogin: false,
    },
  });

  const onSubmitHandler = async (data: FormValues) => {
    const { email, password, isAutoLogin } = data;

    try {
      const res = await LoginApi.signInResponse({ email, password });
      const user = res?.data;

      // mocking test completed
      console.log(user);
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
          <Flex flexDir="column" rowGap="24px">
            <FormElement control={control} name="email" label="이메일 계정" />
            <FormElement control={control} name="password" label="비밀번호" />
          </Flex>
          <Button type="submit" w="100%" h="48px" mt="48px" fontSize="16px">
            로그인
          </Button>
          <Flex justifyContent="space-between" mt="16px">
            <CheckBox control={control} name="isAutoLogin">
              자동 로그인
            </CheckBox>
            <Link href="/auth/forget-password">
              <Text>비밀번호 찾기</Text>
            </Link>
          </Flex>
        </form>

        <Flex flexDir="column" rowGap="48px">
          <Box textAlign="center">
            <Heading as="h6" fontSize="16px">
              간편 로그인
            </Heading>
            <Flex h="48px" justifyContent="space-between" columnGap="9px" mt="24px">
              <Button w="100%" h="100%">
                <a href="https://naver.com">네이버</a>
              </Button>
              <Button w="100%" h="100%">
                <a href="https://kakao.com">카카오</a>
              </Button>
              <Button w="100%" h="100%">
                <a href="https://google.com">구글</a>
              </Button>
            </Flex>
          </Box>

          <Center columnGap="8px">
            <Text>아직 회원이 아니신가요?</Text>
            <Link href="/auth/signup/step1">회원가입</Link>
          </Center>
        </Flex>
      </Flex>
    </Center>
  );
};

export default Login;
