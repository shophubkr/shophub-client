import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "client/components/Icon",
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: "sell", // google-material-icons에 명시되어 있는 name 전달
  },
};

export const SetSize: Story = {
  args: {
    ...Default.args,
    size: 14,
  },
};

export const SetColor: Story = {
  args: {
    ...Default.args,
    color: "red",
  },
};
