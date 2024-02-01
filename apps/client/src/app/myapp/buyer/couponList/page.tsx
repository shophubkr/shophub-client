"use client";

import { Flex, Switch, Text } from "@chakra-ui/react";
import { Coupon, HorizontalLine, ListLayout, ListTotal } from "~/components";
import { useBooleanState } from "~/hooks";

// 퍼블리싱 용 데이터입니다. api 연결 후 삭제 예정
const couponList = [
  {
    id: "1",
    couponContent: "천만원 할인 쿠폰",
    startedAt: "2023-09-08",
    expiredAt: "2023-09-13",
    shopName: "상점 이름3",
    dday: 40,
  },
  {
    id: "2",
    couponContent: "천만원 할인 쿠폰",
    startedAt: "2023-09-08",
    expiredAt: "2023-09-13",
    shopName: "상점 이름3",
    dday: 40,
  },
];
const couponListTotal = couponList.length;

const CouponListPage = () => {
  const { value: isUsedCoupon, onChange: handleIsUsedCoupon } = useBooleanState();

  return (
    <Flex flexDir="column" rowGap="16px">
      <Flex justifyContent="space-between">
        <ListTotal title="쿠폰 전체" total={couponListTotal} />
        <Flex columnGap="5px" alignItems="center">
          <Text>사용 여부</Text>
          <Switch id="isCouponFilterEnabled" checked={isUsedCoupon} onClick={handleIsUsedCoupon} />
        </Flex>
      </Flex>
      <HorizontalLine h="1px" />
      <ListLayout>
        {couponList.map(({ id, ...props }) => (
          <Coupon key={id} couponType="buyer" {...props} />
        ))}
      </ListLayout>
    </Flex>
  );
};

export default CouponListPage;
