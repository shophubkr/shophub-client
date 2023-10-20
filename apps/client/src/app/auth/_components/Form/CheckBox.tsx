import { Checkbox } from "@chakra-ui/react";
import type { FormProps } from "@components/Form";
import { useController } from "react-hook-form";

export const CheckBox = ({ control, name, rules, children }: FormProps) => {
  const { field } = useController({ control, name, rules });

  return (
    <Checkbox id={name} {...field}>
      {children}
    </Checkbox>
    <Checkbox id={name} {...field}>
      {children}
    </Checkbox>
  );
};
