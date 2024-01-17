import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "client/components/Icon",
  component: Icon,
  args: {
    name: "sell",
    size: 14,
    color: "black",
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
