import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import Button from "~/components/Button/Button";
import Input from "~/components/Input/Input";

export interface FormEleProps {
  field: {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  };
  errors?: string;
}

export const Label: Record<string, string> = {
  email: "이메일 계정",
  password: "비밀번호",
  nickName: "닉네임",
  tel: "연락처",
  businessNum: "사업자 등록번호",
};

export default function FormElement({ field, errors }: FormEleProps) {
  const { name } = field;

  return (
    <S.Wrapper style={{ marginBottom: name === "password" ? "8px" : "40px" }}>
      {name !== "passwordConfirm" && <p>{Label[name]} *</p>}

      <S.EleContainer flexDirection={name === "password" ? "column" : "row"} rowGap={name === "password" ? "8px" : "0"}>
        <Input type={name.includes("password") ? "password" : "text"} {...field} />

        {/* 사업자번호 양식이라면 조회 버튼 생성 */}
        {name === "businessNum" && (
          <S.StyledBtn size="small" color="enabled">
            조회
          </S.StyledBtn>
        )}
      </S.EleContainer>

      {errors && name !== "password" && <S.ErrorMsg>{errors}</S.ErrorMsg>}
    </S.Wrapper>
  );
}

const Wrapper = styled.div`
  &:last-of-type {
    margin-bottom: 0;
  }

  & > p {
    margin-bottom: 8px;
  }
`;

const EleContainer = styled(Flex)`
  align-items: center;
  column-gap: 8px;
`;

const StyledBtn = styled(Button)`
  margin-top: 0;
`;

const ErrorMsg = styled.span`
  position: absolute;
  margin-top: 8px;
  font-size: 12px;
  color: red;
`;

const S = {
  Wrapper,
  EleContainer,
  StyledBtn,
  ErrorMsg,
};
