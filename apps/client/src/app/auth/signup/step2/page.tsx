"use client";

import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "~/components/Button/Button";
import CheckElement from "../../_components/Form/CheckElement";
import FormElement from "../../_components/Form/FormElement";

export default function SignUpSecond() {
  const { control, handleSubmit } = useForm({
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
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const userType = searchParams.get("userType");

  useEffect(() => {
    router.refresh();
  }, [router]);

  const onSubmitHandler = async (data: any) => {
    const { email, password, userType, passwordConfirm, nickName, tel, businessNum, ageOverAgree, sendAdsAgree } = data;
    console.log(data);
  };

  return (
    <S.Wrapper>
      <h3>회원 가입</h3>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Controller
          name="email"
          control={control}
          rules={{ required: "이메일을 입력해주세요." }}
          render={({ field, fieldState: { error } }) => {
            return <FormElement field={field} errors={error?.message} />;
          }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => {
            return <FormElement field={field} />;
          }}
        />
        <Controller
          name="passwordConfirm"
          control={control}
          rules={{ required: "비밀번호를 입력해주세요." }}
          render={({ field, fieldState: { error } }) => {
            return <FormElement field={field} errors={error?.message} />;
          }}
        />
        <Controller
          name="nickName"
          control={control}
          rules={{ required: "닉네임을 입력해주세요." }}
          render={({ field, fieldState: { error } }) => {
            return <FormElement field={field} errors={error?.message} />;
          }}
        />

        {userType === "seller" && (
          <>
            <Controller
              name="tel"
              control={control}
              rules={{ required: "연락처를 입력해주세요." }}
              render={({ field, fieldState: { error } }) => {
                return <FormElement field={field} errors={error?.message} />;
              }}
            />
            <Controller
              name="businessNum"
              control={control}
              rules={{ required: "사업자 번호를 입력해주세요." }}
              render={({ field, fieldState: { error } }) => {
                return <FormElement field={field} errors={error?.message} />;
              }}
            />
          </>
        )}

        <Flex mt="48px" flexDir="column">
          <Controller
            name="ageOverAgree"
            control={control}
            rules={{ required: "수신 동의해주세요." }}
            render={({ field }) => {
              return <CheckElement field={field}>[필수] 만 14세 이상이며 모두 동의합니다.</CheckElement>;
            }}
          />
          <Controller
            name="sendAdsAgree"
            control={control}
            render={({ field }) => {
              return <CheckElement field={field}>[선택] 광고성 정보 수신에 모두 동의합니다.</CheckElement>;
            }}
          />
        </Flex>
        <S.StyledButton size="large" type="submit">
          가입하기
        </S.StyledButton>
      </form>
    </S.Wrapper>
  );
}

const Wrapper = styled.section`
  width: 80%;
  max-width: 312px;

  & > h3 {
    text-align: center;
  }

  & > form {
    width: 100%;
    height: auto;
    margin-top: 80px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const S = {
  Wrapper,
  StyledButton,
};
