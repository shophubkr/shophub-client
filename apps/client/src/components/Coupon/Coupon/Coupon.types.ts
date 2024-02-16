import type { CouponBodyProps, RestDayProps } from "../components/CouponComponents.types";

export interface CouponProps extends CouponDataProps {
  couponType: "buyer" | "seller";
}

export interface CouponDataProps {
  shopName?: CouponBodyProps["title"];
  content: CouponBodyProps["title"];
  detail: string;
  isFinished: boolean;
  dday: RestDayProps["dday"];
  startedAt: string;
  expiredAt: string;
}
