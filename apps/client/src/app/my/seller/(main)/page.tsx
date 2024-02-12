"use client";

import { Box, Flex } from "@chakra-ui/react";
import { HorizontalLine } from "~/components";
import { UserProfile } from "../../_components";
import { MyShopSelect, RegisteredProducts, SellerCouponSummary } from "./_components";
import type { ProductDataProps } from "../../_components/Product/Product.types";

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
  ] as ProductDataProps[],
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
      <SellerCouponSummary />
    </Flex>
  );
};

export default SellerMainPage;
