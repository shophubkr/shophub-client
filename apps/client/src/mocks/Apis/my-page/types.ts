import type { CouponSummaryProps } from "~/app/my-page/_components";
import type { StoreProps } from "~/components";

export interface MyPageBuyerProps {
  nearbyStores: StoreProps[];
  CouponSummary: CouponSummaryProps["couponSummary"];
}
