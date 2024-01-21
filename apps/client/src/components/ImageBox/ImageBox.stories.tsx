import type { Meta, StoryObj } from "@storybook/react";

import { ImageBox } from "./ImageBox";

const meta: Meta<typeof ImageBox> = {
  title: "client/components/ImageBox",
  component: ImageBox,
};

export default meta;

type Story = StoryObj<typeof ImageBox>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/200",
    alt: "ImageAlt",
    w: "358px",
    h: "358px",
  },
};

export const SetBorderRadius: Story = {
  args: {
    ...Default.args,
    borderRadius: "8px",
  },
};
