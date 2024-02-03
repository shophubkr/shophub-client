import type { PropsWithChildren } from "react";
import type { Control } from "react-hook-form";

export interface FormProps extends PropsWithChildren {
  control: Control;
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
}
