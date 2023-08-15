import React, { forwardRef } from "react";
import * as S from "./Input.style";

export interface InputProps {
  name: string;
  id?: string;
  scale?: string;
  color?: string;
  shape?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default forwardRef(function Input({ ...restProps }: InputProps, ref) {
  return <S.Input {...restProps} />;
});