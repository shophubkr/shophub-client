import type { Meta, StoryObj } from "@storybook/react";

import { StoreItem } from "./StoreItem";

const TEST_IMAGE_URL = "https://picsum.photos/id/237/96/96";

const meta: Meta<typeof StoreItem> = {
  title: "client/components/StoreItem",
  component: StoreItem,
};

export default meta;

type Story = StoryObj<typeof StoreItem>;

export const Default: Story = {
  args: {
    id: 1,
    image: TEST_IMAGE_URL,
    name: "그래비티",
    introduce: "오버핏 전문 스트릿 브랜드샵",
    address: "서울특별시 강남구 테헤란로 11111",
    checkCoupon: true,
    minPrice: 69000,
  },
};
