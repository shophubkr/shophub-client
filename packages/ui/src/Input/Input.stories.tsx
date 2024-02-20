import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "ui/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {
    placeholder: "이메일 계정",
  },
};

export const WithSubmitButton: Story = {
  args: {
    ...Basic.args,
    submitText: "인증",
  },
};

export const WithShowLength: Story = {
  args: {
    ...Basic.args,
    showLength: true,
    maxLength: 5,
  },
};

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
};
