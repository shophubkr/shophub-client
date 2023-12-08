import { Checkbox } from "@chakra-ui/react";
import type { FormProps } from "@components/Form";
import { useController } from "react-hook-form";

export const CheckBox = ({ control, name, children }: FormProps) => {
  const { field } = useController({ control, name });

  return (
    <Checkbox id={name} {...field}>
      {children}
    </Checkbox>
  );
};
