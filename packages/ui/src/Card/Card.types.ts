import type { ComponentProps } from "react";

export interface SizeProps {
  size: "small" | "medium" | "large";
}

export interface CardProps extends SizeProps, ComponentProps<"img"> {
  title: string;
  content: string;
  isCouponValid?: boolean;
  category?: string;
  distance?: number;
  method?: string;
  requiredTime?: number;
  price?: number;
  address?: string;
}

export type TitleSectionProps = SizeProps & Pick<CardProps, "title" | "category">;

export type CouponSectionProps = SizeProps & Pick<CardProps, "isCouponValid">;

export type DistanceSectionProps = SizeProps & Pick<CardProps, "distance" | "method" | "requiredTime">;

export type AddressSectionProps = SizeProps & Pick<CardProps, "address">;
