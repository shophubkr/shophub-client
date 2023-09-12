import type { RestDayProps, ValidityProps } from "../components/CouponComponents.types";

export interface ClaimCouponProps {
  restDay: RestDayProps["restDay"];
  validity: ValidityProps;
  title: string;
}
