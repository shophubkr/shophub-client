"use client";

import { signUpBuyerSchema, signUpSellerSchema } from "@auth/_constants";
import type { SingUpFormValues } from "@auth/_types";
import { Button, Center, Heading } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { AgreeCheckBox, SignUpForm } from "./_components";

const SignUpSecond = () => {
  const role = useSearchParams().get("userType");
  const { getValues, setValue, control, handleSubmit } = useForm<SingUpFormValues>({
    resolver: yupResolver(role === "buyer" ? signUpBuyerSchema : signUpSellerSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
      isAgeOverAgree: false,
      isSendAdsAgree: false,
    },
  });

  const onSubmitHandler = async (data: SingUpFormValues) => {
    // api test code
    const { email, password, nickname, phoneNumber } = data;

    const formData = { email, password, nickname, phoneNumber, role };
    const baseUrl = "http://13.209.100.56";

    try {
      const res = await axios.post(`${baseUrl}/api/v1/auth/join`, JSON.stringify(formData), {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // res.data.result.id && next step : modalStateAtom -> modal mount -> routing : login page
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
