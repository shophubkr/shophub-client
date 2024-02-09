import type { Meta, StoryObj } from "@storybook/react";
import { ShopPin } from "./ShopPin";

const meta: Meta<typeof ShopPin> = {
  title: "client/components/ShopPin",
  component: ShopPin,
};

export default meta;

type Story = StoryObj<typeof ShopPin>;

export const Default: Story = {
  args: {
    name: "BEEN STORE",
    checkCoupon: false,
  },
};
