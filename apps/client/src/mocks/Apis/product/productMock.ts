/* eslint-disable no-plusplus */
import type { ProductType } from "./productApi";

const productDummy = [
  {
    storeIdx: Math.floor(Math.random() * 100000),
    storeName: "그래비티",
    description: "전문 스트릿 브랜드샵",
    thumbnailUrl: "http://www.newstap.co.kr/news/photo/202105/134617_221857_5720.jpg",
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
    thumbnailUrl: " https://mblogthumb-phinf.pstatic.net/20160907_47/adkms21_1473231615683XUFlp_JPEG/5.jpg?type=w800",
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
    thumbnailUrl: " https://m.betanews.net/imagedb/thumb/2017/0210/f1ef0018.jpg",
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
    thumbnailUrl: "https://m.zeross.co.kr/web/product/big/202110/86d7f1cde828a8596741a9d5d61029e9.jpg",
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
    description: "밀리터리 아미 카고샵",
    thumbnailUrl: "https://img.vogue.co.kr/vogue/2020/05/style_5ecc755d9404f-600x900.jpg",
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
