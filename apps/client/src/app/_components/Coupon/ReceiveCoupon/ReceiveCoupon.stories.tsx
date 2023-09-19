import type { Meta, StoryObj } from "@storybook/react";

import { ReceiveCoupon } from "./ReceiveCoupon";

const meta: Meta<typeof ReceiveCoupon> = {
  title: "client/components/Coupon/ReceiveCoupon",
  component: ReceiveCoupon,
  decorators: [
    (Story) => (
      <div style={{ width: "358px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ReceiveCoupon>;

export const Default: Story = {
  args: {
    restDay: 3,
    validity: { start: "2023-09-01", end: "2023-09-08" },
    title: "50% 할인",
  },
};
