"use client";

import { Flex, Switch, Text } from "@chakra-ui/react";
import type { FollowListHeaderProps } from "./FollowListHeader.types";
import { ListTotal } from "~/components";

export const FollowListHeader = ({ total, couponState, distanceState }: FollowListHeaderProps) => {
  return (
    <Flex flexDir="column" rowGap="24px">
      <ListTotal title="팔로우 매장" total={total} />
      <Flex justifyContent="space-between">
        <Flex gap="3px">
          <Switch
            id="isCouponFilterEnabled"
            checked={couponState.isCouponFilterEnabled}
            onClick={couponState.onChangeCouponFilter}
          />
          <span>쿠폰 여부</span>
        </Flex>
        <Text
          fontWeight={distanceState.isDistanceFilterEnabled ? 600 : 400}
          onClick={distanceState.onChangeDistanceFilter}
          cursor="pointer"
        >
          낮은 가격순
        </Text>
      </Flex>
    </Flex>
  );
};
