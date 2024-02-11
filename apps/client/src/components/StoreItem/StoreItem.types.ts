export interface StoreProps {
  id: number;
  thumbnailUrl: string;
  name: string;
  description: string;
  isCouponAvailable: boolean;
  address: string;
  distance: string;
  minimumPrice: number;
}

export interface StoreItemProps {
  storeInformation: StoreProps;
}
