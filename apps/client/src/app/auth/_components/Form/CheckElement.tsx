import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Input from "~/components/Input/Input";
import type { FormEleProps } from "./FormElement";

interface CheckEleProps extends FormEleProps {
  children: string | JSX.Element;
}

export default function CheckElement({ field, errors, children }: CheckEleProps) {
  const { name } = field;

  return (
    <S.Wrapper>
      <label htmlFor={name}>
        <StyledCheckBox id={name} type="checkbox" {...field} />
        <p>{children}</p>
      </label>
    </S.Wrapper>
  );
}

const Wrapper = styled(Flex)`
  margin-bottom: 8px;

  & > label {
    display: flex;
  }
`;

const StyledCheckBox = styled(Input)`
  margin-right: 8px;
  width: auto;
  height: auto;
`;

const S = {
  Wrapper,
  StyledCheckBox,
};
