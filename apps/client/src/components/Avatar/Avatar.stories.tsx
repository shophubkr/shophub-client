import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "../Avatar";

const meta: Meta<typeof Avatar> = {
  title: "client/components/Avatar",
  component: Avatar,
  argTypes: {
    edit: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const Edit: Story = {
  args: {
    edit: true,
  },
};

const TEST_IMAGE_SRC =
  "https://media.istockphoto.com/id/486456250/ko/%EC%82%AC%EC%A7%84/quokka.jpg?s=612x612&w=0&k=20&c=1phcfqG7aI3-h0KWKxNJxHv-BhJgGHqCXTaXgnE771M=";

export const SetSrc: Story = {
  args: {
    src: TEST_IMAGE_SRC,
  },
};
