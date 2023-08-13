import React from "react";
import * as S from "./Input.style";

export interface InputProps {
  name: string;
  scale: string;
  color: string;
  shape: string;
  value?: string | boolean;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  const { name, scale, color, shape, value, onChange, ...rest } = props;

  return <S.Input name={name} scale={scale} color={color} shape={shape} onChange={onChange} {...rest} />;
}
