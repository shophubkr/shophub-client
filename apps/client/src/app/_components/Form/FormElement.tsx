import { Flex, FormLabel, Input } from "@chakra-ui/react";
import type { FormProps } from "@components/Form/FormProps.type";
import styled from "@emotion/styled";
import { useController } from "react-hook-form";

export const FormElement = ({ control, name, label, type, rules, placeholder }: FormProps) => {
  const {
    field,
    fieldState: { error: errors },
  } = useController({ control, name, rules });

  const isRequired = rules?.required;

  const charCode = placeholder?.charCodeAt(placeholder.length - 1) as number;
  const constantChar = (charCode - 44032) % 28;

  return (
    <Flex width="100%" position="relative" flexDir="column" rowGap="8px">
      {label && (
        <FormLabel htmlFor={name} fontSize="14px" margin="0">
          {label} {isRequired && "*"}
        </FormLabel>
      )}
      <Input type={type} placeholder={`${placeholder}${constantChar === 0 ? "를" : "을"} 입력해주세요`} {...field} />
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
