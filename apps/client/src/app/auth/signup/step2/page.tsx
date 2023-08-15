"use client";

import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "~/components/Button/Button";
import FormElement from "../../_components/Form/FormElement";

export default function SignUpSecond() {
  const { control, handleSubmit } = useForm();
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const userType = searchParams.get("userType");

  useEffect(() => {
    router.refresh();
  }, [router]);

  const onSubmitHandler = async (data: any) => {
    const { email, password, passwordConfirm, nickName, tel, businessNum } = data;

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
          rules={{ required: "비밀번호를 입력해주세요." }}
          render={({ field, fieldState: { error } }) => {
            return <FormElement field={field} errors={error?.message} />;
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

const RadioContainer = styled(Flex)`
  row-gap: 8px;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const S = {
  Wrapper,
  RadioContainer,
  StyledButton,
};
