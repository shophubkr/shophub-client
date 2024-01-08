export type CouponSummaryKeys = "total" | "used" | "unused" | "expired"; // response되는 데이터에 따라 달라질 수 있습니다.

export interface CouponSummaryProps {
  couponSummary: {
    [key in CouponSummaryKeys]?: number;
  };
}

export type CouponSummaryInformationProps = {
  [key in CouponSummaryKeys]: {
    title: string;
    countTextColor: string;
  };
};
