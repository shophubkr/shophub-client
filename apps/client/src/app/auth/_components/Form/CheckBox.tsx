import type { CustomFormProps } from "@auth/_types/types";
import { Checkbox } from "@chakra-ui/react";
import { useController } from "react-hook-form";

export const CheckBox = ({ control, name, rules, children }: CustomFormProps) => {
  const { field } = useController({ control, name, rules });

  return (
    <Checkbox id={name} {...field}>
      {children}
    </Checkbox>
  );
};
