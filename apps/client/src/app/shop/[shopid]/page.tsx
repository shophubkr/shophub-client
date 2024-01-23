"use client";

import { Button, Divider, Flex } from "@chakra-ui/react";

import { CouponSection, ShopBriefInfo, ShopOperationInfo, ShopProductSection } from "./_components";
import { Icon } from "~/components";

const ShopDetailPage = () => {
  return (
    <main>
      <ShopBriefInfo />
      <Flex columnGap="14px" my="24px">
        <Button h="inherit" flex="1" borderRadius="999px" p="16px 0" columnGap="8px" fontSize="16px" fontWeight="500">
          <Icon name="location_on" size={16} />
          길찾기
        </Button>
        <Button h="inherit" flex="1" borderRadius="999px" p="16px 0" columnGap="8px" fontSize="16px" fontWeight="500">
          <Icon name="map" size={16} />
          지도보기
        </Button>
      </Flex>
      <Divider orientation="horizontal" h="1px" />
      <ShopOperationInfo />
      <Divider orientation="horizontal" h="1px" />
      <CouponSection />
      <ShopProductSection />
    </main>
  );
};

export default ShopDetailPage;
