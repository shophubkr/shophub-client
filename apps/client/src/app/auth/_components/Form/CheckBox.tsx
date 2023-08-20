import { Flex, FormLabel } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import { Input } from "~/components/Input/Input";
import type { FormEleProps } from "./FormElement";

export const CheckBox = ({ field, children }: PropsWithChildren<FormEleProps>) => {
  const { name } = field;

  return (
    <FormLabel htmlFor={name} mb="0">
      <Flex alignItems="center" columnGap="8px">
        <Input scale="small" id={name} type="checkbox" {...field} />
        <p>{children}</p>
      </Flex>
    </FormLabel>
  );
};
