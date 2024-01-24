import type { Meta, StoryObj } from "@storybook/react";

import { Card } from ".";

const IMAGE_SRC = "https://picsum.photos/200";

const meta: Meta<typeof Card> = {
  component: Card,
  argTypes: {
    size: {
      controls: "inline-radio",
      options: ["small", "medium", "large"],
      description: "size of card",
    },
    isCouponValid: {
      controls: "boolean",
      description: "coupon availability in shop",
    },
    src: {
      controls: "string",
      description: "card image source",
    },
    alt: {
      controls: "string",
      description: "card image alternative",
    },
    title: {
      controls: "string",
      description: "title of card",
    },
    category: {
      controls: "string",
      description: "category of card",
    },
    content: {
      controls: "string",
      description: "content of card",
    },
    distance: {
      controls: "number",
      description: "distance from my current location to the store",
    },
    method: {
      controls: "string",
      description: "how the user gets to the store",
    },
    requiredTime: {
      controls: "number",
      description: "time to go to the shop",
    },
    price: {
      controls: "number",
      description: "the price written on the card",
    },
    address: {
      controls: "string",
      description: "shop address",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "타이틀",
    content: "내용",
    src: IMAGE_SRC,
    alt: "image alternative",
    size: "small",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    isCouponValid: false,
    distance: 100,
    method: "도보",
    requiredTime: 2,
  },
};

export const SmallCouponAvailable: Story = {
  args: {
    ...Default.args,
    isCouponValid: true,
    distance: 100,
    method: "도보",
    requiredTime: 2,
  },
};

export const Medium: Story = {
  args: {
    ...Default.args,
    size: "medium",
    isCouponValid: false,
    distance: 100,
    method: "도보",
    requiredTime: 2,
    price: 2000,
    address: "서울특별시 강서구",
  },
};

export const MediumCouponAvailable: Story = {
  args: {
    ...Default.args,
    size: "medium",
    isCouponValid: true,
    distance: 100,
    method: "도보",
    requiredTime: 2,
    price: 2000,
    address: "서울특별시 강서구",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "large",
    category: "카테고리",
    price: 3000,
  },
};
