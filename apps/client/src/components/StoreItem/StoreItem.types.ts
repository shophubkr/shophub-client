export interface StoreProps {
  id: number;
  image: string;
  name: string;
  introduce: string;
  checkCoupon: boolean;
  address: string;
  distance: string;
  minimumPrice: number;
}

export interface StoreItemProps {
  storeInformation: StoreProps;
}
