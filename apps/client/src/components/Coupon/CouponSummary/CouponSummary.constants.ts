import { COLORS } from "@shophub/theme/src/token";
import type { CouponSummaryItemProps } from "./CouponSummary.types";

export const VARIANT_TO_COLOR: Record<CouponSummaryItemProps["variant"], string> = {
  black: COLORS.black,
  gray: "#AAAAAA",
  red: "#F82828",
} as const;
