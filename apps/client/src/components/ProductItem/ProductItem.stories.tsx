import type { Meta, StoryObj } from "@storybook/react";

import { ProductItem } from "./ProductItem";

const meta: Meta<typeof ProductItem> = {
  title: "client/components/ProductItem",
  component: ProductItem,
  decorators: [
    (Story) => (
      <div style={{ width: "358px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProductItem>;

export const Default: Story = {
  args: {
    id: 1,
    name: "test",
    introduce: "test",
    imageUrl: "https://picsum.photos/200",
    date: "2023. 07. 27",
    price: 1000,
  },
};
