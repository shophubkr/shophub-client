export interface FollowListHeaderProps {
  total: number;
  couponState: {
    isCouponFilterEnabled: boolean;
    onChangeCouponFilter: VoidFunction;
  };
  distanceState: {
    isDistanceFilterEnabled: boolean;
    onChangeDistanceFilter: VoidFunction;
  };
}
