import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";
import type { GetNearestExpiryCouponResponse } from "../../../_types";
import { API_SHOP_INFO } from "../api";
import { useShopId } from "./useShopId";

export const useGetNearestExpiryCoupon = (options?: UseQueryOptions<GetNearestExpiryCouponResponse["result"]>) => {
  const SHOP_ID = useShopId();

  return useQuery<GetNearestExpiryCouponResponse["result"]>({
    queryKey: ["nearestExpiryCoupon", SHOP_ID],
    queryFn: () => API_SHOP_INFO.GetNearestExpiryCoupon(SHOP_ID),
    ...options,
  });
};
