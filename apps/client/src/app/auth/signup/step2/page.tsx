"use client";

import { signUpBuyerSchema, signUpSellerSchema } from "@auth/_constants";
import { usePostUserSignUp } from "@auth/_state/server";
import type { SingUpFormValues } from "@auth/_types";
import { Button, Center, Heading } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { AgreeCheckBox, SignUpForm } from "./_components";

const SignUpSecond = () => {
  const role = useSearchParams().get("userType");
  const { control, handleSubmit } = useForm<SingUpFormValues>({
    resolver: yupResolver(role === "USER_BUYER" ? signUpBuyerSchema : signUpSellerSchema),
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

  const { isLoading, mutateAsync } = usePostUserSignUp();

  const onSubmitHandler = async (data: SingUpFormValues) => {
    const { email, password, nickname, phoneNumber } = data;

    const buyerFormData = { email, password, nickname, role };
    const sellerFormData = { ...buyerFormData, phoneNumber };

    try {
      await mutateAsync(role === "USER_BUYER" ? buyerFormData : sellerFormData);
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
        <SignUpForm control={control} name="signUpForm" role={role} />
        <AgreeCheckBox control={control} name="signUpCheckbox" />
        <Button w="100%" h="48px" mt="48px" type="submit">
          가입하기
        </Button>
      </form>
    </Center>
  );
};

export default SignUpSecond;
