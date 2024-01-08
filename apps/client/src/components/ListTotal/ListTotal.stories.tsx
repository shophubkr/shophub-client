import type { Meta, StoryObj } from "@storybook/react";

import { ListTotal } from "./ListTotal";

const meta: Meta<typeof ListTotal> = {
  title: "client/components/ListTotal",
  component: ListTotal,
};

export default meta;

type Story = StoryObj<typeof ListTotal>;

export const Default: Story = {
  args: {
    title: "팔로잉 전체",
    total: 32,
  },
};
