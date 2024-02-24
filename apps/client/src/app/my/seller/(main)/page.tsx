"use client";

import { Box, Flex } from "@chakra-ui/react";
import type { ProductItemProps } from "~/components";
import { HorizontalLine } from "~/components";
import { UserProfile } from "../../_components";
import { MyShopSelect, RegisteredProducts, SellerCouponSummary } from "./_components";
import type { SellerCouponSummaryProps } from "./_components/SellerCouponSummary/SellerCouponSummary.types";

const data = {
  email: "test@test.com",
  shops: ["그래비티"],
  products: [
    {
      id: 1,
      name: "test",
      introduce: "test",
      imageUrl: "https://picsum.photos/200",
      date: "2023. 07. 27",
      price: 1000,
    },
  ] as ProductItemProps[],
  coupon: {
    total: 2,
    progress: 2,
    finish: 0,
  } as SellerCouponSummaryProps,
};

const SellerMainPage = () => {
  return (
    <Flex flexDir="column" rowGap="40px" mt="40px">
      <Box px="16px">
        <UserProfile email={data.email} userType="seller" />
      </Box>
      <HorizontalLine />
      <MyShopSelect shopNameList={data.shops} />
      <RegisteredProducts products={data.products} />
      <SellerCouponSummary {...data.coupon} />
    </Flex>
  );
};

export default SellerMainPage;
