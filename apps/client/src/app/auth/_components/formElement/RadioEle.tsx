import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import Input from "~/components/Input/Input";

export interface RadioProps {
  name: string;
  size: string;
  children: React.ReactNode;
}

export default function RadioEle(props: RadioProps) {
  const { name, size, children } = props;
  const [isCheck, setIsCheck] = useState(false);

  const onCheckChange = () => {};

  return (
    <S.RadioContainer alignItems="center">
      <S.StyledInput
        name={name}
        scale={size}
        color="default"
        shape="default"
        type="checkbox"
        value={isCheck}
        onChange={onCheckChange}
      />
      <p>{children}</p>
    </S.RadioContainer>
  );
}

const RadioContainer = styled(Flex)`
  &:first-of-type {
    margin-top: 48px;
  }

  & > p {
    color: #aaa;
  }
`;

const StyledInput = styled(Input)`
  margin-right: 8px;
`;

const S = {
  RadioContainer,
  StyledInput,
};
