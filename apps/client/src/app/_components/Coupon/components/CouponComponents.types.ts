export interface ValidityProps {
  start: string;
  end: string;
}

export interface CouponBodyProps {
  title: string;
  isExpired: boolean;
}

export interface RestDayProps {
  restDay: number;
  align?: "start" | "center" | "end";
}

export interface CouponStateProps {
  isExpired: boolean;
}
