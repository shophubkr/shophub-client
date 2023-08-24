import React, { forwardRef } from "react";
import * as S from "./Input.style";

export interface InputProps {
  name: string;
  id?: string;
  placeholder?: string;
  scale?: string;
  color?: string;
  shape?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef(({ ...restProps }: InputProps, ref) => {
  return <S.Input {...restProps} />;
});
