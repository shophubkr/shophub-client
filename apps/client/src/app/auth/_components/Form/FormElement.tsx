import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";
import Button from "~/components/Button/Button";
import Input from "~/components/Input/Input";

export interface FormEleProps {
  field: {
    name: string;
    value: string;
    onChange: VoidFunction;
    onBlur: VoidFunction;
  };
  errors?: string;
}

export function FormElement({ field, errors, children }: PropsWithChildren<FormEleProps>) {
  const { name } = field;

  return (
    <Flex width="100%" position="relative" flexDir="column" rowGap="8px" mb={children === "비밀번호" ? "-32px" : ""}>
      {children && <p>{children} *</p>}
      <Input type={name.includes("password") ? "password" : "text"} {...field} />
      {errors && name !== "password" && <S.ErrorMsg>{errors}</S.ErrorMsg>}
    </Flex>
  );
}

const StyledBtn = styled(Button)`
  margin-top: 0;
`;

const ErrorMsg = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 8px;
  font-size: 12px;
  color: #ff6565;
`;

const S = {
  StyledBtn,
  ErrorMsg,
};
