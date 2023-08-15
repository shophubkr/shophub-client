"use client";

import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import Button from "~/components/Button/Button";
import CheckElement from "../_components/Form/CheckElement";
import FormElement from "../_components/Form/FormElement";

export default function Login() {
  const { control, handleSubmit } = useForm({ defaultValues: { email: "", password: "" } });

  const onSubmitHandler = () => {};

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
          rules={{ required: "이메일을 입력해주세요." }}
          render={({ field, fieldState: { error: errors } }) => {
            return <FormElement field={field} errors={errors?.message} />;
          }}
        />
        <Button size="large">로그인</Button>

        <Flex justifyContent="space-between">
          <Controller
            name="password"
            control={control}
            rules={{ required: "이메일을 입력해주세요." }}
            render={({ field, fieldState: { error: errors } }) => {
              return (
                <CheckElement field={field} errors={errors?.message}>
                  자동 로그인
                </CheckElement>
              );
            }}
          />
          <Link href="/auth/forget-password">
            <p>비밀번호 찾기</p>
          </Link>
        </Flex>
      </form>

      <S.SnsContainer>
        <h6>간편 로그인</h6>
        <Flex columnGap="8px">
          <Button size="large">네이버</Button>
          <Button size="large">카카오</Button>
          <Button size="large">구글</Button>
        </Flex>
      </S.SnsContainer>

      <S.CampaignContainer justifyContent="center">
        <p>아직 회원이 아니신가요?</p>
        <Link href="/auth/signup/step1">
          <p>회원가입</p>
        </Link>
      </S.CampaignContainer>
    </S.Wrapper>
  );
}

const Wrapper = styled.section`
  width: 80%;
  max-width: 312px;
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const SnsContainer = styled.div`
  & > h6 {
    text-align: center;
  }
`;

const CampaignContainer = styled(Flex)`
  & > p {
    margin-right: 4px;
  }
`;

const S = {
  Wrapper,
  TitleContainer,
  SnsContainer,
  CampaignContainer,
};
