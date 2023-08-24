import type { CustomFormProps } from "@auth/_types/types";
import { Flex, FormLabel } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useController } from "react-hook-form";
import { Input } from "~/components";

export const FormElement = ({ control, name, label }: CustomFormProps) => {
  const {
    field,
    fieldState: { error: errors },
  } = useController({ control, name, rules: { required: "필수값" } });

  return (
    <Flex width="100%" position="relative" flexDir="column" rowGap="8px">
      <FormLabel htmlFor={name} fontSize="14px" margin="0">
        {label} *
      </FormLabel>
      <Input type={name.includes("password") ? "password" : "text"} placeholder={`${label} 입력`} {...field} />
      {errors && <S.ErrorMsg>{errors.message}</S.ErrorMsg>}
    </Flex>
  );
};

const ErrorMsg = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 8px;
  font-size: 12px;
  color: #ff6565;
`;

const S = {
  ErrorMsg,
};
