import { Flex, Switch, Text } from "@chakra-ui/react";
import type { FiltersProps } from "./Filters.types";

export const Filters = ({ couponState, distanceState }: FiltersProps) => {
  return (
    <Flex justifyContent="space-between">
      <Flex gap="5px" alignItems="center">
        <Switch
          id="isCouponFilterEnabled"
          checked={couponState.isCouponFilterEnabled}
          onClick={couponState.onChangeCouponFilter}
        />
        <Text>쿠폰 여부</Text>
      </Flex>
      <Text
        fontWeight={distanceState.isDistanceFilterEnabled ? 600 : 400}
        onClick={distanceState.onChangeDistanceFilter}
        cursor="pointer"
      >
        낮은 가격순
      </Text>
    </Flex>
  );
};
