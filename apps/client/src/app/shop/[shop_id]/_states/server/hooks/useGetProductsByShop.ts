import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import type { GetProductsByShopResponse } from "../../../_types";
import { API_SHOP_INFO } from "../api";

export const useGetProductsByShop = (options?: UseQueryOptions<GetProductsByShopResponse["result"]["productList"]>) => {
  const params = useParams();
  const SHOP_ID = Number(params.shop_id);

  return useQuery<GetProductsByShopResponse["result"]["productList"]>({
    queryKey: ["productsByShop", SHOP_ID],
    queryFn: () => API_SHOP_INFO.GetProductsByShop(SHOP_ID),
    ...options,
  });
};
