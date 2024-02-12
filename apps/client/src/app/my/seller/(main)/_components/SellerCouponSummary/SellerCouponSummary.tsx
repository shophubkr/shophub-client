"use client";

import { Flex } from "@chakra-ui/react";
import { Button } from "@shophub/ui";
import { SummarySection } from "~/app/my/_components";

export const SellerCouponSummary = () => {
  return (
    <Flex px="16px" flexDir="column" rowGap="16px">
      <SummarySection title="발급 쿠폰" href="/my/seller/coupons">
        {/* TODO: 변경된 CouponSummary 추가 */}
      </SummarySection>
      <Flex columnGap="14px">
        <Button variant="black">쿠폰 관리</Button>
        <Button variant="gray">쿠폰 발급</Button>
      </Flex>
    </Flex>
  );
};
