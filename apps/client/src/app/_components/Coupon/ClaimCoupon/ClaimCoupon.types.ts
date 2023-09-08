import type { RestDayProps, ValidityProps } from "../components/CouponComponent.types";

export interface ClaimCouponProps {
  restDay: RestDayProps["restDay"];
  validity: ValidityProps;
  title: string;
}
