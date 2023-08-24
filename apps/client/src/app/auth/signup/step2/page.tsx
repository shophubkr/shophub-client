"use client";

import { BusinessApiButton, CheckBox, FormElement } from "@auth/_components";
import type { FormValues } from "@auth/_types/types";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import * as S from "./page.style";

const SignUpSecond = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      nickName: "",
      tel: "",
      businessNum: "",
      ageOverAgree: "",
      sendAdsAgree: "",
    },
  });

  const { get } = useSearchParams();
  const userType = get("userType");

  const onSubmitHandler = async (data: FormValues) => {
    const { email, password, userType, passwordConfirm, nickName, tel, businessNum, ageOverAgree, sendAdsAgree } = data;
  };

  return (
    <S.Wrapper w="80%" maxW="312px" margin="80px auto" flexDir="column">
      <Heading as="h3" fontSize="24px" textAlign="center">
        회원 가입
      </Heading>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Flex flexDir="column" rowGap="40px">
          <FormElement control={control} name="email" label="이메일 계정" />
          <FormElement control={control} name="password" label="비밀번호" />
          <FormElement control={control} name="passwordConfirm" label="비밀번호 확인" />
          <FormElement control={control} name="nickName" label="닉네임" />

          {userType === "seller" && (
            <>
              <FormElement control={control} name="tel" label="연락처" />
              <Flex justifyContent="space-between" alignItems="flex-end" columnGap="8px">
                <FormElement control={control} name="businessNum" label="사업자 등록번호" />
                <BusinessApiButton control={control} name="businessNum" />
              </Flex>
            </>
          )}
        </Flex>

        <Flex mt="48px" flexDir="column" rowGap="8px">
          <CheckBox control={control} name="ageOverAgree" rules={{ required: "필수값" }}>
            [필수] 만 14세 이상이며 모두 동의합니다.
          </CheckBox>
          <CheckBox control={control} name="sendAdsAgree">
            [선택] 광고성 정보 수신에 모두 동의합니다.
          </CheckBox>
        </Flex>
        <Button w="100%" h="48px" mt="48px" type="submit">
          가입하기
        </Button>
      </form>
    </S.Wrapper>
  );
};

export default SignUpSecond;
