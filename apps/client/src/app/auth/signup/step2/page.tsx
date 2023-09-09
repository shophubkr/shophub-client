"use client";

import { BusinessApiButton, CheckBox } from "@auth/_components";
import { signUpSchema } from "@auth/_constants";
import { signUpApi } from "@auth/_state/server/api";
import type { SingUpFormValues } from "@auth/_types";
import { Button, Center, Flex, Heading } from "@chakra-ui/react";
import { FormElement } from "@components/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

const SignUpSecond = () => {
  const { getValues, setValue, control, handleSubmit } = useForm<SingUpFormValues>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      nickName: "",
      tel: "",
      businessNum: "",
      isBusinessNumState: false,
      isAgeOverAgree: false,
      isSendAdsAgree: false,
    },
  });

  const { get } = useSearchParams();
  const userType = get("userType");

  const onSubmitHandler = async (data: SingUpFormValues) => {
    console.log(data);
    const postData = { ...data, userType };

    try {
      // mocking test completed
      const res = await signUpApi.signUpResponse(postData as object);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center flexDir="column" rowGap="80px">
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
          <FormElement control={control} name="nickName" label="닉네임" placeholder="닉네임" />

          {userType === "seller" && (
            <>
              <FormElement control={control} name="tel" label="연락처" placeholder="연락처" />
              <Flex justifyContent="space-between" alignItems="flex-end" columnGap="8px">
                <FormElement control={control} name="businessNum" label="사업자 등록번호" placeholder="사업자 번호" />
                <BusinessApiButton
                  control={control}
                  name="isBusinessNumState"
                  getValues={getValues}
                  setValue={setValue}
                />
              </Flex>
            </>
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
