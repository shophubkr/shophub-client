import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import type { GetShopDetailInfoResponse } from "../../../_types";
import { API_SHOP_INFO } from "../api";

export const useGetShopDetailInfo = (options?: UseQueryOptions<GetShopDetailInfoResponse["result"]>) => {
  const params = useParams();
  const SHOP_ID = Number(params.shop_id);

  return useQuery<GetShopDetailInfoResponse["result"]>({
    queryKey: ["getShopDetailInfo", SHOP_ID],
    queryFn: () => API_SHOP_INFO.GetShopDetailInfo(SHOP_ID),
    ...options,
  });
};
