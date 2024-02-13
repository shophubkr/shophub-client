"use client";

import { Flex } from "@chakra-ui/react";
import { Button } from "@shophub/ui";
import { SummarySection } from "~/app/my/_components";
import { CouponSummaryContainer, CouponSummaryItem } from "~/components";
import type { SellerCouponSummaryProps } from "./SellerCouponSummary.types";

export const SellerCouponSummary = ({ total, progress, finish }: SellerCouponSummaryProps) => {
  return (
    <Flex px="16px" flexDir="column" rowGap="16px">
      <SummarySection title="발급 쿠폰" href="/my/seller/coupons">
        <CouponSummaryContainer>
          <CouponSummaryItem title="전체" count={total} variant="red" />
          <CouponSummaryItem title="진행" count={progress} variant="black" />
          <CouponSummaryItem title="완료" count={finish} variant="gray" />
        </CouponSummaryContainer>
      </SummarySection>
      <Flex columnGap="14px">
        <Button variant="black">쿠폰 관리</Button>
        <Button variant="gray">쿠폰 발급</Button>
      </Flex>
    </Flex>
  );
};
