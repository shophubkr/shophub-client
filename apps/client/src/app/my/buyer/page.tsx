"use client";

import { Box } from "@chakra-ui/react";
import { CouponSummaryContainer, CouponSummaryItem, HorizontalLine, ListLayout, StoreItem } from "~/components";
import { SummarySection, UserProfile } from "../_components";

const data = {
  followShop: {
    shopList: [
      {
        id: 1,
        name: "상점 이름3",
        image: "https://picsum.photos/200",
        address: "상점 주소",
        introduce: "상점 소개",
        checkCoupon: true,
        distance: "100m",
        minimumPrice: 2000,
      },
    ],
  },
};

const BuyerMainPage = () => {
  return (
    <Box w="full" mt="32px">
      <Box mb="42px" ml="16px">
        <UserProfile email="test@test.com" userType="buyer" />
      </Box>
      <HorizontalLine />
      <SummarySection title="가장 가까운 매장" href="/my-page/buyer/nearby-stores">
        <ListLayout>
          {data?.followShop.shopList.map((store) => (
            <StoreItem key={store.id} storeInformation={store} />
          ))}
        </ListLayout>
      </SummarySection>
      <HorizontalLine />
      <SummarySection title="쿠폰 내역" href="/my-page/buyer/coupons">
        <CouponSummaryContainer>
          <CouponSummaryItem title="전체" count={8} variant="red" />
          <CouponSummaryItem title="사용 쿠폰" count={8} variant="black" />
          <CouponSummaryItem title="미사용 쿠폰" count={8} variant="gray" />
          <CouponSummaryItem title="만료 쿠폰" count={8} variant="gray" />
        </CouponSummaryContainer>
      </SummarySection>
    </Box>
  );
};

export default BuyerMainPage;
