import type { Meta, StoryObj } from "@storybook/react";

import { FONTS } from "@shophub/theme/src/token";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    typo: {
      control: "select",
      options: Object.keys(FONTS),
    },
    color: {
      control: "text",
    },
    as: {
      control: "select",
      options: ["span", "div", "p", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Basic: Story = {
  args: {
    children: "This is a basic text.",
    typo: "h1",
  },
};

export const SetColor: Story = {
  args: {
    ...Basic.args,
    color: "primary.100",
  },
};

export const SetTag: Story = {
  args: {
    ...Basic.args,
    as: "h1",
  },
};
