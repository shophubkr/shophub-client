export interface CouponBodyProps {
  title: string;
  isExpired: boolean;
}

export interface RestDayProps {
  dday: number;
  align?: "start" | "center" | "end";
}

export interface CouponStateProps {
  isExpired: boolean;
}
