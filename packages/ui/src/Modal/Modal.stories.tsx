import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from ".";

const meta: Meta<typeof Modal> = {
  component: Modal,
  argTypes: {
    type: {
      control: "radio",
      options: ["positive", "negative", "warning"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Positive: Story = {
  render: (args) => <Modal {...args} />,
};

Positive.args = {
  type: "positive",
  text: "기재된 내용은 가이드 내용입니다.",
  isOpen: true,
  onConfirm: () => {},
  onClose: () => {},
};
