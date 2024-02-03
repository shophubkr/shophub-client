import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import type { UseQueryOptions } from "@tanstack/react-query";
import type { GetNearestExpiryCouponResponse } from "../../../_types";
import { API_SHOP_INFO } from "../api";

export const useGetNearestExpiryCoupon = (options?: UseQueryOptions<GetNearestExpiryCouponResponse["result"]>) => {
  const params = useParams();
  const SHOP_ID = Number(params.shop_id);

  return useQuery<GetNearestExpiryCouponResponse["result"]>({
    queryKey: ["nearestExpiryCoupon", SHOP_ID],
    queryFn: () => API_SHOP_INFO.GetNearestExpiryCoupon(SHOP_ID),
    ...options,
  });
};
