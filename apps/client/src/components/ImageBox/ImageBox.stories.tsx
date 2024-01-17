import type { Meta, StoryObj } from "@storybook/react";

import { ImageBox } from "./ImageBox";

const meta: Meta<typeof ImageBox> = {
  title: "client/components/ImageBox",
  component: ImageBox,
  args: {
    src: "https://picsum.photos/200",
    alt: "ImageAlt",
    w: "358px",
    h: "358px",
    borderRadius: "8px",
  },
};

export default meta;

type Story = StoryObj<typeof ImageBox>;

export const Default: Story = {};

export const Circle: Story = {
  args: {
    borderRadius: "50%",
  },
};
