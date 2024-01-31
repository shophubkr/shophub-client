import { axiosInstance } from "~/app/shared/server";
import type {
  GetNearestExpiryCouponResponse,
  GetProductsByShopResponse,
  GetShopDetailInfoResponse,
} from "../../_types";

export const API_SHOP_INFO = {
  GetShopDetailInfo: async (shopId: number) => {
    const res = await axiosInstance().get<GetShopDetailInfoResponse>(`/shops/${shopId}`);
    return res.data.result;
  },
  GetNearestExpiryCoupon: async (shopId: number) => {
    const res = await axiosInstance().get<GetNearestExpiryCouponResponse>(`/shops/${shopId}/coupons/shortest`);
    return res.data.result;
  },
  GetProductsByShop: async (shopId: number) => {
    const res = await axiosInstance().get<GetProductsByShopResponse>(`/${shopId}/products`);
    return res.data.result.productList;
  },
};
