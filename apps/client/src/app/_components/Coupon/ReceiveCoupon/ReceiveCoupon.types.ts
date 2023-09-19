import type { RestDayProps, ValidityProps } from "../components/CouponComponents.types";

export interface ReceiveCouponProps {
  restDay: RestDayProps["restDay"];
  validity: ValidityProps;
  title: string;
}
