import { Checkbox } from "@chakra-ui/react";
import { useController } from "react-hook-form";
import type { FormProps } from "~/components/Form";

export const CheckBox = ({ control, name, rules, children }: FormProps) => {
  const { field } = useController({ control, name, rules });

  return (
    <Checkbox id={name} {...field}>
      {children}
    </Checkbox>
  );
};
