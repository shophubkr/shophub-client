"use client";

import { Divider, Flex, Spinner } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@shophub/ui";

import { CouponSection, ShopBriefInfo, ShopOperationInfo, ShopProductSection } from "./_components";
import { shopApi } from "./_states/server";

const ShopDetailPage = () => {
  const params = useParams();
  const shopId = Number(params.shop_id);
  const {
    isLoading,
    data: shopInfo,
    isError,
  } = useQuery(["shopDetail", shopId], () => shopApi.getShopDetailInfo(shopId));

  if (isLoading)
    return <Spinner position="absolute" mt="calc(50vh - 20px)" left="50%" transform="translateX(-50%)" size="lg" />;
  if (isError) return null;

  return (
    <main>
      <ShopBriefInfo name={shopInfo.name} level={shopInfo.level} introduce={shopInfo.introduce} />
      <Flex columnGap="14px" my="24px">
        <Button iconNamed="location_on" variant="outline" round="full">
          길찾기
        </Button>
        <Button iconNamed="map" variant="outline" round="full">
          지도보기
        </Button>
      </Flex>
      <Divider orientation="horizontal" h="1px" />
      <ShopOperationInfo
        address={shopInfo.address}
        hour={shopInfo.hour}
        telNum={shopInfo.telNum}
        tags={shopInfo.tags}
      />
      <Divider orientation="horizontal" h="1px" />
      <CouponSection shopId={shopId} />
      <ShopProductSection shopId={shopId} />
    </main>
  );
};

export default ShopDetailPage;
