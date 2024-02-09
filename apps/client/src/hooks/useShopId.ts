import { useParams } from "next/navigation";

export const useShopId = () => {
  const params = useParams();
  const SHOP_ID = Number(params.shop_id);

  return SHOP_ID;
};
