/* eslint-disable no-plusplus */
import type { ProductType } from "./productApi";

const productDummy = [
  {
    storeIdx: Math.floor(Math.random() * 100000),
    storeName: "그래비티",
    description: "전문 스트릿 브랜드샵",
    thumbnailUrl: "이미지",
    latLng: {
      lat: 37.5000776,
      lng: 127.0385419,
    },
    isCouponAvailable: true,
    isRecommend: false,
    distance: 120,
    price: 120000,
  },
  {
    storeIdx: Math.floor(Math.random() * 100000),
    storeName: "레이어드",
    description: "웨딩 전문 드레스샵",
    thumbnailUrl: "이미지",
    latLng: {
      lat: 37.5020699,
      lng: 127.0347033,
    },
    isCouponAvailable: false,
    isRecommend: false,
    distance: 150,
    price: 89000,
  },
  {
    storeIdx: Math.floor(Math.random() * 100000),
    storeName: "맨인",
    description: "남성 정장 테일러샵",
    thumbnailUrl: "이미지",
    latLng: {
      lat: 37.4994755,
      lng: 127.0352252,
    },
    isCouponAvailable: true,
    isRecommend: false,
    distance: 180,
    price: 43000,
  },
  {
    storeIdx: Math.floor(Math.random() * 100000),
    storeName: "하프앤블럭",
    description: "오버핏 언더독 패션",
    thumbnailUrl: "이미지",
    latLng: {
      lat: 37.499927,
      lng: 127.036789,
    },
    isCouponAvailable: false,
    isRecommend: false,
    distance: 200,
    price: 43000,
  },
  {
    storeIdx: Math.floor(Math.random() * 100000),
    storeName: "고르나도",
    description: "네이비 씰 아미 카고샵",
    thumbnailUrl: "이미지",
    latLng: {
      lat: 37.498186,
      lng: 127.0362074,
    },
    isCouponAvailable: false,
    isRecommend: true,
    distance: 228,
    price: 68000,
  },
];

export const productMockData: ProductType[] = [];

for (let i = 0; i < 25; i++) {
  productMockData.push(...productDummy);
}
