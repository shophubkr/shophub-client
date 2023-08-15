import React from "react";
import * as S from "./Input.style";

export interface InputProps {
  name: string;
  scale?: string;
  color?: string;
  shape?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ ...restProps }: InputProps) {
  return <S.Input {...restProps} />;
}
