"use client";

import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { HorizontalLine, ListLayout, ListTotal } from "~/components";
import { Coupon, Filter } from "./_components";

const data = {
  couponList: [
    {
      id: 4,
      content: "천만원 할인 쿠폰",
      detail: "디테일디테일디테일",
      isFinished: true,
      startedAt: "2023-09-08",
      expiredAt: "2023-09-10",
      dday: -60,
    },
    {
      id: 5,
      content: "천만원 할인 쿠폰",
      detail: "디테일디테일디테일",
      isFinished: false,
      startedAt: "2023-09-08",
      expiredAt: "2023-09-10",
      dday: 40,
    },
  ],
  page: {
    totalElements: 5,
  },
};

const SellerCouponsPage = () => {
  const [isTerminatedFilter, setTerminatedFilter] = useState<boolean | null>(null);

  return (
    <div>
      <Flex justifyContent="space-between">
        <ListTotal title="발급 쿠폰 전체" total={data.page.totalElements} />
        <Filter setTerminatedFilter={setTerminatedFilter} />
      </Flex>
      <HorizontalLine h="1px" mt="16px" mb="21px" />
      <ListLayout>
        {data.couponList.map((coupon) => (
          <Coupon key={coupon.id} {...coupon} />
        ))}
      </ListLayout>
    </div>
  );
};

export default SellerCouponsPage;
