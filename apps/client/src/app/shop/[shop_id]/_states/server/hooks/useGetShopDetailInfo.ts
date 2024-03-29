import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { GetShopDetailInfoResponse } from "../../../_types";
import { API_SHOP_INFO } from "../api";
import { useShopId } from "~/hooks";

export const useGetShopDetailInfo = (options?: UseQueryOptions<GetShopDetailInfoResponse>) => {
  const SHOP_ID = useShopId();

  return useQuery<GetShopDetailInfoResponse>({
    queryKey: ["getShopDetailInfo", SHOP_ID],
    queryFn: () => API_SHOP_INFO.GetShopDetailInfo(SHOP_ID),
    ...options,
  });
};
