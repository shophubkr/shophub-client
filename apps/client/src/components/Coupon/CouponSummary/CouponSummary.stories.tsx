import type { Meta, StoryObj } from "@storybook/react";
import { CouponSummaryContainer, CouponSummaryItem } from "./CouponSummary";

const meta: Meta = {
  title: "client/components/Coupon/CouponSummary",
  decorators: [
    (Story) => (
      <div style={{ width: "358px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj;

export const CouponSummary: Story = {
  render: () => (
    <CouponSummaryContainer>
      <CouponSummaryItem title="전체" count={8} variant="red" />
      <CouponSummaryItem title="사용 쿠폰" count={8} variant="black" />
      <CouponSummaryItem title="미사용 쿠폰" count={8} variant="gray" />
      <CouponSummaryItem title="만료 쿠폰" count={8} variant="gray" />
    </CouponSummaryContainer>
  ),
};
