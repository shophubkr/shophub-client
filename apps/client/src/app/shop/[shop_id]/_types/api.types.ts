export type ShopDetailInfoResponse = {
  id: number;
  sellerId: number;
  name: string;
  address: string;
  hour: string;
  tags: string[];
  images: string[];
  telNum: string;
  introduce: string;
  level: number;
  followCnt: number;
};

export type NearestExpireCouponResponse = {
  content: string;
  dday: number;
};

export type ProductsByShopResponse = {
  productList: {
    id: number;
    name: string;
    imageUrl: string;
    topCategory: string;
    introduce: string;
    price: number;
  }[];
};

export interface ShopApiType {
  getShopDetailInfo: (shopId: number) => Promise<ShopDetailInfoResponse>;
}

export interface CouponApiType {
  getNearestExpiryCoupon: (shopId: number) => Promise<NearestExpireCouponResponse>;
}

export interface ProductApiType {
  getProductsByShop: (shopId: number) => Promise<ProductsByShopResponse>;
}
