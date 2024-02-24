"use client";

import { ExpansionCoupon } from "~/components";

const CouponDetailPage = ({ params: { title } }: { params: { title: string } }) => {
  return <ExpansionCoupon title={decodeURIComponent(title)} />;
};

export default CouponDetailPage;
