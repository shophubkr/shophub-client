import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import type { UseQueryOptions } from "@tanstack/react-query";
import type { GetNearestExpiryCouponResponse } from "../_types";
import { API_SHOP_INFO } from "../_states/server";

export const useGetNearestExpiryCoupon = (options?: UseQueryOptions<GetNearestExpiryCouponResponse["result"]>) => {
  const params = useParams();
  const SHOP_ID = Number(params.shop_id);

  const { data: couponInfo } = useQuery<GetNearestExpiryCouponResponse["result"]>(
    ["nearestExpiryCoupon", SHOP_ID],
    () => API_SHOP_INFO.GetNearestExpiryCoupon(SHOP_ID),
    options,
  );

  return couponInfo;
};
