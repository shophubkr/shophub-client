import type { Meta, StoryObj } from "@storybook/react";

import { ExpansionCoupon } from "./ExpansionCoupon";

const meta: Meta<typeof ExpansionCoupon> = {
  title: "client/components/Coupon/ExpansionCoupon",
  component: ExpansionCoupon,
  decorators: [
    (Story) => (
      <div style={{ width: "390px", height: "754px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ExpansionCoupon>;

export const Deault: Story = {
  args: {
    title: "50% 할인",
  },
};
