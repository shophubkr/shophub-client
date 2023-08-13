import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

export interface FormEleProps {
  name: string;
}

export const Label: Record<string, string> = {
  email: "이메일 계정",
  password: "비밀번호",
  nickName: "닉네임",
  tel: "연락처",
  businessNum: "사업자 등록번호",
};

export default function FormEle(props: FormEleProps) {
  const { name } = props;
  const [isInput, setIsInput] = useState("");
  const [otherIsInput, setOtherIsInput] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;

    setIsInput(value);
  };

  const onOtherInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;

    setOtherIsInput(value);
  };

  return (
    <S.Wrapper>
      <>
        <p>{Label[name]} *</p>
        <S.EleContainer
          alignItems="center"
          columnGap="8px"
          flexDirection={name === "password" ? "column" : "row"}
          rowGap={name === "password" ? "8px" : "0"}
        >
          <S.StyledInput
            name={name}
            scale="default"
            color="default"
            shape="default"
            type={name.includes("password") ? "password" : "text"}
            onChange={onInputChange}
            value={isInput}
          />
          {name === "password" && (
            <S.StyledInput
              name="passwordConfirm"
              scale="default"
              color="default"
              shape="default"
              type="password"
              onChange={onOtherInputChange}
              value={otherIsInput}
            />
          )}
          {(name === "email" || name === "businessNum") && (
            <S.StyledButton size="small" color="enabled" shape="default">
              {name === "email" ? "인증" : "조회"}
            </S.StyledButton>
          )}
        </S.EleContainer>
      </>
    </S.Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 32px;

  &:last-of-type {
    margin-bottom: 0;
  }

  & > p {
    margin-bottom: 8px;
  }
`;

const EleContainer = styled(Flex)``;

const StyledInput = styled(Input)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-top: 0;
`;

const S = {
  Wrapper,
  EleContainer,
  StyledInput,
  StyledButton,
};
