"use client";

import { signUpSchema } from "@auth/_constants";
import { signUpApi } from "@auth/_state/server/api";
import type { SingUpFormValues } from "@auth/_types";
import { Button, Center, Heading } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { AgreeCheckBox, SignUpForm } from "./_components";

const SignUpSecond = () => {
  const role = useSearchParams().get("userType");
  const { getValues, setValue, control, handleSubmit } = useForm<SingUpFormValues>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
      phoneNumber: "",
      isAgeOverAgree: false,
      isSendAdsAgree: false,
    },
  });

  const onSubmitHandler = async (data: SingUpFormValues) => {
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
