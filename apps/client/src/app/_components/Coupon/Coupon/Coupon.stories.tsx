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
    storeName: "BEEN STORE",
    restDay: 3,
    validity: { start: "2023-09-01", end: "2023-09-08" },
    title: "50% 할인",
  },
};

export const BuyerExpired: Story = {
  args: {
    ...Buyer.args,
    restDay: 0,
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
    restDay: 0,
  },
};
