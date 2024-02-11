import type { CouponBodyProps, RestDayProps } from "../components/CouponComponents.types";

export interface CouponProps {
  couponType: "buyer" | "seller";
  shopName: CouponBodyProps["title"];
  couponContent: CouponBodyProps["title"];
  dday: RestDayProps["dday"];
  startedAt: string;
  expiredAt: string;
}
