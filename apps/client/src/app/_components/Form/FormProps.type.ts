import type { SingUpFormValues } from "@auth/_types";
import type { PropsWithChildren } from "react";
import type { Control, UseFormSetValue } from "react-hook-form";

export interface FormProps extends PropsWithChildren {
  control: Control;
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  getValues?: (newValue: string) => void;
  setValue?: UseFormSetValue<SingUpFormValues>;
  rules?: {
    required?: string;
    validate?: () => boolean | string;
  };
  isBusinessNumber?: boolean;
  onBusinessNumberUpdate?: (newValue: boolean) => void;
}
