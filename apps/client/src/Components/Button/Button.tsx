import * as S from "./Button.style";

export interface ButtonProps {
  size: string;
  color: string;
  shape: string;
  type?: "submit";
  children: string | JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button(props: ButtonProps) {
  const { size, color, shape, type, children, onClick, ...rest } = props;

  return (
    <S.Button size={size} color={color} shape={shape} type={type} onClick={onClick} {...rest}>
      {children}
    </S.Button>
  );
}
