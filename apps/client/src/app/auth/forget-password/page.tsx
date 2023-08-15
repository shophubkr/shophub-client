"use client";

import { Button, Center, Heading, Input } from "@chakra-ui/react";
import type { FormEvent } from "react";

const ForgetPw = () => {
  const onSubmitToEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Center flexDir="column">
      <Heading as="h1">
        <Center flexDir="column">
          <span>비밀번호를</span>
          <span>잊으셨나요?</span>
        </Center>
      </Heading>
      <form onSubmit={onSubmitToEmail}>
        <Center flexDir="column" mt="16px" w="312px" gap="32px">
          <Center flexDir="column">
            <span>인증받으신 이메일 주소로</span>
            <span>비밀번호 재설정 링크를 보내드립니다</span>
          </Center>
          <Input name="email" placeholder="아이디(이메일 계정)을 입력해주세요" w="full" />
          <Button w="full">재설정 링크</Button>
        </Center>
      </form>
    </Center>
  );
};

export default ForgetPw;
