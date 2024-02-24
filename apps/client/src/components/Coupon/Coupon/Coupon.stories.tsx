import type { Meta, StoryObj } from "@storybook/react";

import { Coupon } from "./Coupon";

const meta: Meta<typeof Coupon> = {
  title: "client/components/Coupon/Coupon",
  component: Coupon,
  argTypes: {
    couponType: {
      control: "radio",
      options: ["buyer", "seller"],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "358px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Coupon>;

export const Buyer: Story = {
  args: {
    couponType: "buyer",
    shopName: "BEEN STORE",
    dday: 3,
    startedAt: "2023-09-01",
    expiredAt: "2023-09-08",
    content: "50% 할인",
  },
};

export const BuyerExpired: Story = {
  args: {
    ...Buyer.args,
    dday: 0,
  },
};

export const Seller: Story = {
  args: {
    ...Buyer.args,
    couponType: "seller",
  },
};

export const SellerExpired: Story = {
  args: {
    ...Seller.args,
    dday: 0,
  },
};
