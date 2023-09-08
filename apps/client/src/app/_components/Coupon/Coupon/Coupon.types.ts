import type { CouponBodyProps, RestDayProps, ValidityProps } from "../components/CouponComponent.types";

export interface CouponProps {
  couponType: "buyer" | "seller";
  storeName: CouponBodyProps["title"];
  title: CouponBodyProps["title"];
  restDay: RestDayProps["restDay"];
  validity: ValidityProps;
}
