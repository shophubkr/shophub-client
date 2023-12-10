import type { CouponSummaryInformationProps } from "./CouponSummary.types";

const usedTextColor = {
  default: "#000000",
  gray: "#AAAAAA",
  red: "#F82828",
};

export const CouponSummaryInformation: CouponSummaryInformationProps = {
  total: {
    title: "전체",
    countTextColor: usedTextColor.red,
  },
  used: {
    title: "사용 쿠폰",
    countTextColor: usedTextColor.default,
  },
  unused: {
    title: "미사용 쿠폰",
    countTextColor: usedTextColor.gray,
  },
  expired: {
    title: "만료 쿠폰",
    countTextColor: usedTextColor.gray,
  },
};
