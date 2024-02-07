export interface GetShopDetailInfoResponse {
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
}

export interface GetNearestExpiryCouponResponse {
  content: string;
  dday: number;
}

export interface GetProductsByShopResponse {
  productList: {
    id: number;
    name: string;
    imageUrl: string;
    topCategory: string;
    introduce: string;
    price: number;
  }[];
}
