/* eslint-disable no-plusplus */
import type { ProductType } from "./productApi";

const productDummy = [
  {
    storeIdx: Math.floor(Math.random() * 100000),
    storeName: "그래비티",
    catchPraise: "전문 스트릿 브랜드샵",
    thumbnail: "이미지",
    longitude: 37.500163,
    latitude: 127.0348455,
    isCoupon: true,
    isRecommend: false,
    distance: 120,
    price: 120000,
  },
  {
    storeIdx: Math.floor(Math.random() * 100000),
    storeName: "레이어드",
    catchPraise: "웨딩 전문 드레스샵",
    thumbnail: "이미지",
    longitude: 37.500163,
    latitude: 127.0348455,
    isCoupon: false,
    isRecommend: false,
    distance: 150,
    price: 89000,
  },
  {
    storeIdx: Math.floor(Math.random() * 100000),
    storeName: "맨인",
    catchPraise: "남성 정장 테일러샵",
    thumbnail: "이미지",
    longitude: 37.500163,
    latitude: 127.0348455,
    isCoupon: true,
    isRecommend: false,
    distance: 180,
    price: 43000,
  },
  {
    storeIdx: Math.floor(Math.random() * 100000),
    storeName: "하프앤블럭",
    catchPraise: "오버핏 언더독 패션",
    thumbnail: "이미지",
    longitude: 37.500163,
    latitude: 127.0348455,
    isCoupon: false,
    isRecommend: false,
    distance: 200,
    price: 43000,
  },
  {
    storeIdx: Math.floor(Math.random() * 100000),
    storeName: "고르나도",
    catchPraise: "네이비 씰 아미 카고샵",
    thumbnail: "이미지",
    longitude: 37.500163,
    latitude: 127.0348455,
    isCoupon: false,
    isRecommend: false,
    distance: 228,
    price: 68000,
  },
];

export const productMockData: ProductType[] = [];

for (let i = 0; i < 25; i++) {
  productMockData.push(...productDummy);
}
