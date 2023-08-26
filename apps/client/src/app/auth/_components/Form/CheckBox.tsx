import type { CustomFormProps } from "@auth/_types/types";
import { Checkbox, Flex, FormLabel, Text } from "@chakra-ui/react";
import { useController } from "react-hook-form";

export const CheckBox = ({ control, name, rules, children }: CustomFormProps) => {
  const { field } = useController({ control, name, rules });

  return (
    <FormLabel htmlFor={name} mb="0">
      <Flex alignItems="center" columnGap="8px">
        <Checkbox id={name} {...field} />
        <Text fontSize="14px">{children}</Text>
      </Flex>
    </FormLabel>
  );
};
