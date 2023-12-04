import { Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import type { FormProps } from "@components/Form/FormProps.type";
import { useController } from "react-hook-form";
import * as Styled from "./FormElement.style";

export const FormElement = ({ control, name, label, type, ...rest }: FormProps) => {
  const {
    field,
    fieldState: { error: errors },
  } = useController({ control, name });

  return (
    <Flex width="100%" position="relative" flexDir="column">
      <FormLabel display="flex" flexDir="column" rowGap="8px" htmlFor={name} fontSize="14px" margin="0">
        {label && <Text>{label}</Text>}
        <Input id={name} type={type} {...field} {...rest} />
      </FormLabel>
      {errors && <Styled.ErrorMsg>{errors.message}</Styled.ErrorMsg>}
    </Flex>
  );
};
