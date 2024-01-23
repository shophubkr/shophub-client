"use client";

import { SIGN_UP_BUYER_SCHEMA, SIGN_UP_SELLER_SCHEMA } from "@auth/_constants";
import { useSignUpSubmitHandler } from "@auth/_state/server";
import type { SignUpFormValues, UserType } from "@auth/_types";
import { Button, Center, Heading } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { AgreeCheckBox, SignUpForm } from "./_components";

const SignUpSecond = () => {
  const role = useSearchParams().get("userType");

  const { control, handleSubmit } = useForm<SignUpFormValues>({
    resolver: yupResolver(role === "USER_BUYER" ? SIGN_UP_BUYER_SCHEMA : SIGN_UP_SELLER_SCHEMA),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
      isAgeOverAgree: false,
      isSendAdsAgree: false,
      ...(role === "USER_SELLER" && { phoneNumber: "" }),
    },
  });

  const { onSubmitHandler } = useSignUpSubmitHandler(role as UserType);

  return (
    <Center w="full" flexDir="column" rowGap="80px">
      <Heading as="h3" fontSize="24px" textAlign="center">
        회원 가입
      </Heading>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <SignUpForm control={control} name="signUpForm" />
        <AgreeCheckBox control={control} name="signUpCheckbox" />
        <Button w="full" h="48px" mt="48px" type="submit">
          가입하기
        </Button>
      </form>
    </Center>
  );
};

export default SignUpSecond;
