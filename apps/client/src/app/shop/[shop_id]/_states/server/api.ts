import { axiosInstance } from "~/app/shared/server";

import type { CouponApiType, ProductApiType, ShopApiType } from "../../_types";

export const shopApi: ShopApiType = {
  getShopDetailInfo: (shopId) => {
    return axiosInstance().get(`/shops/${shopId}`);
  },
};

export const couponApi: CouponApiType = {
  getNearestExpiryCoupon: (shopId) => {
    return axiosInstance().get(`/shops/${shopId}/coupons/shortest`);
  },
};

export const productApi: ProductApiType = {
  getProductsByShop: (shopId) => {
    return axiosInstance().get(`/${shopId}/products`);
  },
};
