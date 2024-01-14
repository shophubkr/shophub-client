"use client";

import { SIGN_UP_BUYER_SCHEMA, SIGN_UP_SELLER_SCHEMA } from "@auth/_constants";
import { signUpApi } from "@auth/_state/server/api";
import type { SignUpFormValues } from "@auth/_types";
import { Button, Center, Flex, Heading } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { CheckBox, FormElement } from "~/components";

const SignUpSecond = () => {
  const role = useSearchParams().get("userType");

  const { control, handleSubmit } = useForm<SignUpFormValues>({
    resolver: yupResolver(role === "buyer" ? SIGN_UP_BUYER_SCHEMA : SIGN_UP_SELLER_SCHEMA),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
      isAgeOverAgree: false,
      isSendAdsAgree: false,
      ...(role === "seller" && { phoneNumber: "" }),
    },
  });

  const onSubmitHandler = async (data: SignUpFormValues) => {
    console.log(data);
    const postData = { ...data, role };

    try {
      // mocking test completed
      const res = await signUpApi.signUpResponse(postData as object);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center w="100%" flexDir="column" rowGap="80px">
      <Heading as="h3" fontSize="24px" textAlign="center">
        회원 가입
      </Heading>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Flex flexDir="column" rowGap="40px">
          <FormElement control={control} name="email" label="이메일 계정" placeholder="이메일 계정" />
          <FormElement control={control} name="password" label="비밀번호" type="password" placeholder="비밀번호" />
          <FormElement
            control={control}
            name="passwordConfirm"
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호 확인"
          />
          <FormElement control={control} name="nickname" label="닉네임" placeholder="닉네임" />
          {role === "seller" && (
            <FormElement control={control} name="phoneNumber" label="연락처" placeholder="연락처" />
          )}
        </Flex>
        <Flex mt="48px" flexDir="column" rowGap="8px">
          <CheckBox control={control} name="isAgeOverAgree">
            [필수] 만 14세 이상이며 모두 동의합니다.
          </CheckBox>
          <CheckBox control={control} name="isSendAdsAgree">
            [선택] 광고성 정보 수신에 모두 동의합니다.
          </CheckBox>
        </Flex>
        <Button w="100%" h="48px" mt="48px" type="submit">
          가입하기
        </Button>
      </form>
    </Center>
  );
};

export default SignUpSecond;
