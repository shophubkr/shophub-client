import type { Meta, StoryObj } from "@storybook/react";

import { CouponSummary } from "./CouponSummary";

const meta: Meta<typeof CouponSummary> = {
  title: "client/components/Coupon/CouponSummary",
  component: CouponSummary,
  decorators: [
    (Story) => (
      <div style={{ width: "358px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CouponSummary>;

export const Compartments3: Story = {
  args: {
    couponSummary: {
      total: 8,
      used: 4,
      expired: 2,
    },
  },
};

export const Compartments4: Story = {
  args: {
    couponSummary: {
      total: 8,
      used: 4,
      unused: 2,
      expired: 2,
    },
  },
};
