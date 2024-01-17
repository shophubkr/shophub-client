import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "black", "gray", "outline"],
    },
    size: {
      control: "inline-radio",
      options: ["large", "medium", "small", "tiny"],
    },
    round: {
      control: "inline-radio",
      options: ["default", "none", "full"],
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    children: "Button",
  },
};

export const MediumSize: Story = {
  args: {
    ...Basic.args,
    size: "medium",
  },
};

export const FullRound: Story = {
  args: {
    ...Basic.args,
    round: "full",
  },
};

export const WithIcon: Story = {
  args: {
    ...Basic.args,
    iconNamed: "store",
  },
};

export const OutlineAndIcon: Story = {
  args: {
    ...Basic.args,
    variant: "outline",
  },
};

export const WithWidth: Story = {
  args: {
    ...Basic.args,
    w: "133px",
  },
};
