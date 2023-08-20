import * as S from "./Button.style";

export interface ButtonProps {
  size?: string;
  color?: string;
  shape?: string;
  type?: "submit" | "button";
  children: string | JSX.Element;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export const Button = ({ children, ...restProps }: ButtonProps) => {
  return <S.Button {...restProps}>{children}</S.Button>;
};
