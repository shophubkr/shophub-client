"use client";

import { Divider, Flex } from "@chakra-ui/react";
import { Button } from "@shophub/ui";

import { CouponSection, ShopBriefInfo, ShopOperationInfo, ShopProductSection } from "./_components";
import { useGetShopDetailInfo } from "./_hooks";

const ShopDetailPage = () => {
  const shopInfo = useGetShopDetailInfo();

  return (
    <main>
      {shopInfo && (
        <>
          <ShopBriefInfo {...shopInfo} />
          <Flex columnGap="14px" my="24px">
            <Button iconNamed="location_on" variant="outline" round="full">
              길찾기
            </Button>
            <Button iconNamed="map" variant="outline" round="full">
              지도보기
            </Button>
          </Flex>
          <Divider orientation="horizontal" h="1px" />
          <ShopOperationInfo {...shopInfo} />
          <Divider orientation="horizontal" h="1px" />
          <CouponSection />
          <ShopProductSection />
        </>
      )}
    </main>
  );
};

export default ShopDetailPage;
