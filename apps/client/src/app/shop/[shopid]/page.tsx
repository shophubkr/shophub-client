"use client";

import { Flex } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";

import * as Styled from "./page.styles";

import { ProductImage } from "./_components/ProductImage";
import { Button } from "./_components/Button";
import { ShopBriefInfo } from "./_components/ShopBriefInfo";
import { ShopDetailInfo } from "./_components/ShopDetailInfo";
import { CouponSection } from "./_components/CouponSection";
import { ShopProductSection } from "./_components/ShopProductSection";

const ShopDetailPage = () => {
  const theme = useShophubTheme();

  return (
    <main>
      <ProductImage src="https://picsum.photos/200" alt="" size="lg" priority />

      <Flex mt="40px">
        <ShopBriefInfo />
        <Flex alignItems="flex-end" gap="4px">
          <Button size="tiny" label="share" />
          <Button size="tiny" label="follow" />
        </Flex>
      </Flex>

      <Flex gap="14px" m="24px 0">
        <Button size="large" label="findWay" />
        <Button size="large" label="viewMap" />
      </Flex>

      <Styled.Divider theme={theme} />
      <ShopDetailInfo />
      <Styled.Divider theme={theme} />

      <CouponSection />
      <ShopProductSection />
    </main>
  );
};

export default ShopDetailPage;
