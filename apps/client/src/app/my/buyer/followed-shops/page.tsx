"use client";

import { Flex } from "@chakra-ui/react";
import type { StoreProps } from "~/components";
import { HorizontalLine, ListLayout, ListTotal, StoreItem } from "~/components";
import { useBooleanState } from "~/hooks";
import { Filters } from "./_components";

const FollowedShopsPage = () => {
  const { value: isCouponFilterEnabled, onChange: onChangeCouponFilter } = useBooleanState();
  const { value: isDistanceFilterEnabled, onChange: onChangeDistanceFilter } = useBooleanState();

  // TODO : react-query 적용 후 제거
  const stores: StoreProps[] = []; // 팔로우 매장 리스트
  const followCount = 0; // total

  return (
    <Flex flexDir="column" rowGap="16px">
      <ListTotal title="팔로우 매장" total={followCount} />
      <Filters
        couponState={{ isCouponFilterEnabled, onChangeCouponFilter }}
        distanceState={{ isDistanceFilterEnabled, onChangeDistanceFilter }}
      />
      <HorizontalLine h="1px" />
      <ListLayout>
        {stores.map((store) => (
          <StoreItem key={store.id} storeInformation={store} />
        ))}
      </ListLayout>
    </Flex>
  );
};

export default FollowedShopsPage;
