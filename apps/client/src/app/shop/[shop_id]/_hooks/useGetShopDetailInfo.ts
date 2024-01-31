import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { API_SHOP_INFO } from "../_states/server";
import type { GetShopDetailInfoResponse } from "../_types";

export const useGetShopDetailInfo = (options?: UseQueryOptions<GetShopDetailInfoResponse["result"]>) => {
  const params = useParams();
  const SHOP_ID = Number(params.shop_id);

  const { data: shopInfo } = useQuery<GetShopDetailInfoResponse["result"]>(
    ["getShopDetailInfo", SHOP_ID],
    () => API_SHOP_INFO.GetShopDetailInfo(SHOP_ID),
    options,
  );

  return shopInfo;
};
