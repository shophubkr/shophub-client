import type { CustomFormProps } from "@auth/_types/types";
import { Flex, FormLabel, Text } from "@chakra-ui/react";
import { useController } from "react-hook-form";
import { Input } from "~/components";

export const CheckBox = ({ control, name, rules, children }: CustomFormProps) => {
  const { field } = useController({ control, name, rules });

  return (
    <FormLabel htmlFor={name} mb="0">
      <Flex alignItems="center" columnGap="8px">
        <Input scale="small" id={name} type="checkbox" {...field} />
        <Text fontSize="14px">{children}</Text>
      </Flex>
    </FormLabel>
  );
};
