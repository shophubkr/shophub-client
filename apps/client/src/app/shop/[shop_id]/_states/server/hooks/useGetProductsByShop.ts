import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { GetProductsByShopResponse } from "../../../_types";
import { API_SHOP_INFO } from "../api";
import { useShopId } from "~/hooks";

export const useGetProductsByShop = (options?: UseQueryOptions<GetProductsByShopResponse["productList"]>) => {
  const SHOP_ID = useShopId();

  return useQuery<GetProductsByShopResponse["productList"]>({
    queryKey: ["productsByShop", SHOP_ID],
    queryFn: () => API_SHOP_INFO.GetProductsByShop(SHOP_ID),
    ...options,
  });
};
