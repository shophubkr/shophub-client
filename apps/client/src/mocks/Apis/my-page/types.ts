import type { StoreProps } from "~/app/_components";
import type { CouponSummaryProps } from "~/app/my-page/_components";

export interface MyPageBuyerProps {
  nearbyStores: StoreProps[];
  CouponSummary: CouponSummaryProps["couponSummary"];
}
