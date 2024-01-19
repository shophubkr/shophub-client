import { Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { useController } from "react-hook-form";
import type { FormProps } from "./FormProps.type";

export const FormElement = ({ control, name, label, type, ...rest }: FormProps) => {
  const {
    field,
    fieldState: { error: errors },
  } = useController({ control, name });

  return (
    <Flex width="full" position="relative" flexDir="column">
      <FormLabel display="flex" flexDir="column" rowGap="8px" htmlFor={name} fontSize="14px" margin="0">
        {label && <Text>{label}</Text>}
        <Input id={name} type={type} {...field} {...rest} />
      </FormLabel>
      {errors && (
        <Text position="absolute" top="100%" marginTop="8px" fontSize="12px" color="#ff6565">
          {errors.message}
        </Text>
      )}
    </Flex>
  );
};
