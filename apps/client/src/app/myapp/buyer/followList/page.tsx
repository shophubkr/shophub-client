"use client";

import { Flex } from "@chakra-ui/react";
import type { StoreProps } from "~/components";
import { HorizontalLine, StoreItem } from "~/components";
import { FollowListHeader } from "./_components";
import { useBooleanState } from "~/hooks";

const FollowListPage = () => {
  const { value: isCouponFilterEnabled, onChange: onChangeCouponFilter } = useBooleanState();
  const { value: isDistanceFilterEnabled, onChange: onChangeDistanceFilter } = useBooleanState();

  // TODO : react-query 적용 후 제거
  const stores: StoreProps[] = []; // 팔로우 매장 리스트
  const followCount = 0; // total

  return (
    <div>
      <Flex flexDir="column" rowGap="16px">
        <FollowListHeader
          total={10}
          couponState={{ isCouponFilterEnabled, onChangeCouponFilter }}
          distanceState={{ isDistanceFilterEnabled, onChangeDistanceFilter }}
        />
        <HorizontalLine h="1px" />
        {stores.map((store, index) => (
          <>
            <StoreItem storeInformation={store} />
            {index + 1 !== followCount && <HorizontalLine h="1px" m="26px 0 24px" />}
          </>
        ))}
      </Flex>
    </div>
  );
};

export default FollowListPage;
