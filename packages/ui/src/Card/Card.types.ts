import type { ComponentProps } from "react";

export interface SizeProps {
  size: "small" | "medium" | "large";
}

export interface CouponSectionProps extends SizeProps {
  isCouponValid?: boolean;
}

export type CardProps = CouponSectionProps & ComponentProps<"img">;
