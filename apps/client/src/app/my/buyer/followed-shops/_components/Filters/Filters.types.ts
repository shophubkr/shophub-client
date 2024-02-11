export interface FiltersProps {
  couponState: {
    isCouponFilterEnabled: boolean;
    onChangeCouponFilter: VoidFunction;
  };
  distanceState: {
    isDistanceFilterEnabled: boolean;
    onChangeDistanceFilter: VoidFunction;
  };
}
