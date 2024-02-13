import type { Meta, StoryObj } from "@storybook/react";

import { BackButton } from "./BackButton";

const meta: Meta<typeof BackButton> = {
  title: "client/components/BackButton",
  component: BackButton,
};

export default meta;

type Story = StoryObj<typeof BackButton>;

export const Default: Story = {
  args: {
    href: "/",
  },
};

export const SetSize: Story = {
  args: {
    ...Default.args,
    size: 24,
  },
};
