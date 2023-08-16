"use client";

import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import Button from "~/components/Button/Button";
import { Campaign } from "../_components/Campaign";
import CheckElement from "../_components/Form/CheckElement";
import FormElement from "../_components/Form/FormElement";
import { SnsAccount } from "../_components/SnsAccount";

export default function Login() {
  const { setValue, control, handleSubmit } = useForm({ defaultValues: { email: "", password: "", autoLogin: "" } });

  const onSubmitHandler = (data: any) => {
    const { email, password } = data;
  };

  return (
    <S.Wrapper>
      <TitleContainer>
        <p>입어보고 사자</p>
        <h3>SHOPHUB</h3>
      </TitleContainer>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Controller
          name="email"
          control={control}
          rules={{ required: "이메일을 입력해주세요." }}
          render={({ field, fieldState: { error: errors } }) => {
            return <FormElement field={field} errors={errors?.message} />;
          }}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: "비밀번호를 입력해주세요." }}
          render={({ field, fieldState: { error: errors } }) => {
            return <FormElement field={field} errors={errors?.message} />;
          }}
        />
        <Button type="submit" size="large">
          로그인
        </Button>

        <Flex justifyContent="space-between" mt="16px">
          <Controller
            name="autoLogin"
            control={control}
            render={({ field }) => {
              return <CheckElement field={field}>아이디 저장</CheckElement>;
            }}
          />
          <Link href="/auth/forget-password">
            <p>비밀번호 찾기</p>
          </Link>
        </Flex>
      </form>

      {/* 간편 로그인 */}
      <SnsAccount />

      {/* 캠페인 문구 */}
      <Campaign />
    </S.Wrapper>
  );
}

const Wrapper = styled.section`
  width: 80%;
  max-width: 312px;

  & > form {
    margin-top: 80px;

    & > div:first-of-type {
      margin-bottom: 16px !important;
    }

    & > button {
      margin-top: 32px !important;
    }
  }
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const S = {
  Wrapper,
  TitleContainer,
};
