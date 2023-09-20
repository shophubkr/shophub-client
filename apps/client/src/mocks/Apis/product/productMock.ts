/* eslint-disable no-plusplus */
import type { ProductType } from "./productApi";

const productDummy = [
  {
    store_idx: Math.floor(Math.random() * 100000),
    store_name: "그래비티",
    catch_praise: "전문 스트릿 브랜드샵",
    thumbnail: "이미지",
    longitude: 37.500163,
    latitude: 127.0348455,
    isCoupon: true,
    isRecommend: false,
    distance: 120,
    price: 120000,
  },
  {
    store_idx: Math.floor(Math.random() * 100000),
    store_name: "레이어드",
    catch_praise: "웨딩 전문 드레스샵",
    thumbnail: "이미지",
    longitude: 37.500163,
    latitude: 127.0348455,
    isCoupon: false,
    isRecommend: false,
    distance: 150,
    price: 89000,
  },
  {
    store_idx: Math.floor(Math.random() * 100000),
    store_name: "맨인",
    catch_praise: "남성 정장 테일러샵",
    thumbnail: "이미지",
    longitude: 37.500163,
    latitude: 127.0348455,
    isCoupon: true,
    isRecommend: false,
    distance: 180,
    price: 43000,
  },
  {
    store_idx: Math.floor(Math.random() * 100000),
    store_name: "하프앤블럭",
    catch_praise: "오버핏 언더독 패션",
    thumbnail: "이미지",
    longitude: 37.500163,
    latitude: 127.0348455,
    isCoupon: false,
    isRecommend: false,
    distance: 200,
    price: 43000,
  },
  {
    store_idx: Math.floor(Math.random() * 100000),
    store_name: "고르나도",
    catch_praise: "네이비 씰 아미 카고샵",
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
