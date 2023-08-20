import type { PropsWithChildren } from "react";
import * as S from "./Button.style";

export interface ButtonProps extends PropsWithChildren {
  size?: string;
  color?: string;
  shape?: string;
  type?: "submit" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export const Button = ({ children, ...restProps }: ButtonProps) => {
  return <S.Button {...restProps}>{children}</S.Button>;
};
