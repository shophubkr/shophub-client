"use client";

import { Flex } from "@chakra-ui/react";
import { Button } from "@shophub/ui";

import { CouponSection, ShopBriefInfo, ShopOperationInfo, ShopProductSection } from "./_components";
import { useGetShopDetailInfo } from "./_states/server";
import { HorizontalLine } from "~/components";

const ShopDetailPage = () => {
  const { data: shopInfo } = useGetShopDetailInfo();

  return (
    <main>
      {shopInfo && (
        <>
          <ShopBriefInfo {...shopInfo} />
          <Flex columnGap="14px" my="24px">
            <Button iconNamed="location_on" variant="outline" round="pill">
              길찾기
            </Button>
            <Button iconNamed="map" variant="outline" round="pill">
              지도보기
            </Button>
          </Flex>
          <HorizontalLine h="1px" />
          <ShopOperationInfo {...shopInfo} />
          <HorizontalLine h="1px" />
          <CouponSection />
          <ShopProductSection />
        </>
      )}
    </main>
  );
};

export default ShopDetailPage;
