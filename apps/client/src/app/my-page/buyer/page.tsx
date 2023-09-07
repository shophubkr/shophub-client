"use client";

import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { HorizontalLine, StoreItem } from "~/app/_components";
import type { MyPageBuyerProps } from "~/mocks/Apis";
import { CouponSummary, SummarySection, UserProfile } from "../_components";

const BuyerMainPage = () => {
  // 퍼블리싱 용입니다.
  const [data, setData] = useState<MyPageBuyerProps>({ nearbyStores: [], CouponSummary: {} });
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get<MyPageBuyerProps>("/api/user/my-page");
        console.log(data);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <Box w="full" mt="32px">
      <Box mb="42px" ml="16px">
        <UserProfile email="test@test.com" userType="buyer" />
      </Box>
      <HorizontalLine />
      <SummarySection title="가장 가까운 매장" href="/my-page/buyer/nearby-stores">
        {data?.nearbyStores.map((store, index) => (
          <Box>
            <StoreItem key={store.thumbnailUrl} storeInformation={store} />
            {index !== data.nearbyStores.length - 1 && <HorizontalLine h="1px" m="26px 0 24px" />}
          </Box>
        ))}
      </SummarySection>
      <HorizontalLine />
      <SummarySection title="쿠폰 내역" href="/my-page/buyer/coupons">
        <CouponSummary couponSummary={data?.CouponSummary} />
      </SummarySection>
    </Box>
  );
};

export default BuyerMainPage;
