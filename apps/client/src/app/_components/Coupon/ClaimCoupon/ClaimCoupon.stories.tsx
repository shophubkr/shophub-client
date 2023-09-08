import type { Meta, StoryObj } from "@storybook/react";

import { ClaimCoupon } from "./ClaimCoupon";

const meta: Meta<typeof ClaimCoupon> = {
  title: "client/components/Coupon/ClaimCoupon",
  component: ClaimCoupon,
  decorators: [
    (Story) => (
      <div style={{ width: "358px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ClaimCoupon>;

export const Default: Story = {
  args: {
    restDay: 3,
    validity: { start: "2023-09-01", end: "2023-09-08" },
    title: "50% 할인",
  },
};
