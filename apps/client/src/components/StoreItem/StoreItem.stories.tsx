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
    storeInformation: {
      thumbnailUrl: TEST_IMAGE_URL,
      name: "BEEN STORE",
      description: "스트릿 옷가게",
      distance: "12m",
      address: "서울특별시 강남구 테헤란로 11111",
      isCouponAvailable: false,
      minimumPrice: 14000,
    },
  },
};
