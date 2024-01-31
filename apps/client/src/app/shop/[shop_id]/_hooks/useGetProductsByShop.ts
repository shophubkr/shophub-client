import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { API_SHOP_INFO } from "../_states/server";
import type { GetProductsByShopResponse } from "../_types";

export const useGetProductsByShop = (options?: UseQueryOptions<GetProductsByShopResponse["result"]["productList"]>) => {
  const params = useParams();
  const SHOP_ID = Number(params.shop_id);

  const { data: productList } = useQuery<GetProductsByShopResponse["result"]["productList"]>(
    ["productsByShop", SHOP_ID],
    () => API_SHOP_INFO.GetProductsByShop(SHOP_ID),
    options,
  );

  return productList;
};
