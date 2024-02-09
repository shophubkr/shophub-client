import { api } from "~/app/shared/server";
import type {
  GetNearestExpiryCouponResponse,
  GetProductsByShopResponse,
  GetShopDetailInfoResponse,
} from "../../_types";

export const API_SHOP_INFO = {
  GetShopDetailInfo: async (shopId: number) => {
    const { data } = await api.get<GetShopDetailInfoResponse>(`/shops/${shopId}`);
    return data.result;
  },
  GetNearestExpiryCoupon: async (shopId: number) => {
    const { data } = await api.get<GetNearestExpiryCouponResponse>(`/shops/${shopId}/coupons/shortest`);
    return data.result;
  },
  GetProductsByShop: async (shopId: number) => {
    const { data } = await api.get<GetProductsByShopResponse>(`/${shopId}/products`);
    return data.result.productList;
  },
};
