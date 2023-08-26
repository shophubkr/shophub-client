import type { PropsWithChildren } from "react";
import type { Control } from "react-hook-form";

export type FormValues = {
  email?: string;
  password?: string;
  passwordConfirm?: string;
  userType?: "buyer" | "seller";
  nickName?: string;
  tel?: string;
  businessNum?: string;
  ageOverAgree?: string;
  sendAdsAgree?: string;
  autoLogin?: string;
};

export interface CustomFormProps extends PropsWithChildren {
  control: Control<FormValues>;
  name: keyof FormValues;
  rules?: object;
  label?: string;
}
