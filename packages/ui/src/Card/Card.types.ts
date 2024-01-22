export interface SizeProps {
  size: "small" | "medium" | "large";
}

export interface CardProps extends SizeProps {
  isCouponValid: boolean;
}
