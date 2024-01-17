import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
  argTypes: {
    color: {
      control: "inline-radio",
      options: ["primary", "black", "gray"],
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
  render: () => (
    <Button>
      <span className="material-icons-outlined">shopping_bag</span>
      <div>Button</div>
    </Button>
  ),
};

export const WithWidth: Story = {
  args: {
    ...Basic.args,
    w: "133px",
  },
};
