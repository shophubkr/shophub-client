import type { ShopDetailInfoResponse } from "./api.types";

export type ShopIdType = number;

export interface CouponSectionProps {
  shopId: ShopIdType;
}

export type ShopBriefInfoProps = Pick<ShopDetailInfoResponse, "name" | "level" | "introduce">;

export type ShopOperationInfoProps = Pick<ShopDetailInfoResponse, "address" | "hour" | "telNum" | "tags">;

export interface ShopProductProps {
  id: number;
  name: string;
  imageUrl: string;
  topCategory: string;
  introduce: string;
  price: number;
}

export interface ShopProductSectionProps {
  shopId: ShopIdType;
}
