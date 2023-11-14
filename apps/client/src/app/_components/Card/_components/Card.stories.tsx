import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Card) => (
      // width : 뷰포트 전체 너비
      <div style={{ width: "390px" }}>
        <Card />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const SmallCardStory: Story = {
  name: "SmallCard",
  args: {
    store: {
      storeIdx: 1,
      storeName: "그래비티",
      description: "전문 스트릿 브랜드샵",
      distance: 120,
      isCouponAvailable: true,
      isRecommend: true,
      latLng: {
        lat: 37.5000776,
        lng: 127.0385419,
      },
      price: 120000,
      thumbnailUrl: "http://www.newstap.co.kr/news/photo/202105/134617_221857_5720.jpg",
    },
  },
};

export const MediumCardStory: Story = {
  name: "MediumCard",
};

export const LargeCardStory: Story = {
  name: "LargeCard",
};
