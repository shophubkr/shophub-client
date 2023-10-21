/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PropsWithChildren } from "react";
import type { Control } from "react-hook-form";

export interface FormProps extends PropsWithChildren {
  control: Control;
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  getValues?: (newValue: string) => void;
  setValue?: (name: string, value: any) => void;
  rules?: {
    required?: string;
    validate?: () => boolean | string;
  };
  isBusinessNumber?: boolean;
  onBusinessNumberUpdate?: (newValue: boolean) => void;
}
