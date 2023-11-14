import type { Meta, StoryObj } from "@storybook/react";
import { StorePinOnMap } from "./StorePinOnMap";

const meta: Meta<typeof StorePinOnMap> = {
  title: "Home/StorePinOnMap",
  component: StorePinOnMap,
  decorators: [
    (StorePinOnMap) => (
      <div style={{ width: "100px" }}>
        <StorePinOnMap />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof StorePinOnMap>;

export const RecommendYesCoupon: Story = {
  name: "RecommendYesCoupon",
  args: {
    store: {
      storeIdx: 1,
      storeName: "그래비티",
      isCouponAvailable: true,
      isRecommend: true,
    },
  },
};

export const RecommendNoCoupon: Story = {
  name: "RecommendNoCoupon",
  args: {
    store: {
      storeIdx: 2,
      ...RecommendYesCoupon.args!.store,
      isCouponAvailable: false,
    },
  },
};

export const NearByYesCoupon: Story = {
  name: "NearByYesCoupon",
  args: {
    store: {
      storeIdx: 3,
      ...RecommendYesCoupon.args!.store,
      isCouponAvailable: true,
      isRecommend: false,
    },
  },
};

export const NearByNoCoupon: Story = {
  name: "NearByNoCoupon",
  args: {
    store: {
      storeIdx: 4,
      ...NearByYesCoupon.args!.store,
      isCouponAvailable: false,
    },
  },
};
