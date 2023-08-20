import type { CustomFormProps } from "@auth/_types/types";
import { Flex, FormLabel } from "@chakra-ui/react";
import { useController } from "react-hook-form";
import { Input } from "~/components";

export const CheckBox = ({ control, name, children }: CustomFormProps) => {
  const { field } = useController({ control, name, rules: { required: "필수값" } });

  return (
    <FormLabel htmlFor={name} mb="0">
      <Flex alignItems="center" columnGap="8px">
        <Input scale="small" id={name} type="checkbox" {...field} />
        <p>{children}</p>
      </Flex>
    </FormLabel>
  );
};
