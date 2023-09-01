"use client";

import { BusinessApiButton, CheckBox, FormElement } from "@auth/_components";
import { signUpApi } from "@auth/_state/server/api";
import type { FormValues } from "@auth/_types/types";
import { Button, Center, Flex, Heading } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUpSecond = () => {
  const [사업자번호가있는가, set사업자번호여부] = useState(false);
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
    <Center w="80%" maxW="312px" margin="80px auto" flexDir="column" rowGap="80px">
      <Heading as="h3" fontSize="24px" textAlign="center">
        회원 가입
      </Heading>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Flex flexDir="column" rowGap="40px">
          <FormElement control={control} name="email" label="이메일 계정" rules={{ required: "필수값" }} />
          <FormElement control={control} name="password" label="비밀번호" rules={{ required: "필수값" }} />
          <FormElement control={control} name="passwordConfirm" label="비밀번호 확인" rules={{ required: "필수값" }} />
          <FormElement control={control} name="nickName" label="닉네임" rules={{ required: "필수값" }} />

          {userType === "seller" && (
            <>
              <FormElement control={control} name="tel" label="연락처" rules={{ required: "필수값" }} />
              <Flex justifyContent="space-between" alignItems="flex-end" columnGap="8px">
                <FormElement
                  control={control}
                  name="businessNum"
                  label="사업자 등록번호"
                  rules={{
                    validate: () => {
                      if (!사업자번호가있는가) {
                        return "필수값";
                      }
                      return true;
                    },
                  }}
                />
                <BusinessApiButton
                  control={control}
                  name="businessNum"
                  isBusinessNumber={사업자번호가있는가}
                  onBusinessNumberUpdate={set사업자번호여부}
                />
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
    </Center>
  );
};

export default SignUpSecond;
