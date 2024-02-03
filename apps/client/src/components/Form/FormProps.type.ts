import type { InputProps } from "@chakra-ui/react";
import type { Control } from "react-hook-form";

export interface FormProps extends InputProps {
  control: Control;
  name: string;
  label?: string;
  type?: string;
  showValidationMessage?: boolean;
}
