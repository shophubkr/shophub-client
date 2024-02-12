"use client";

import { Flex } from "@chakra-ui/react";
import { Button } from "@shophub/ui";
import { SummarySection, Product } from "~/app/my/_components";
import { HorizontalLine, ListLayout } from "~/components";
import type { RegisteredProductsProps } from "./RegisteredProduct.types";

export const RegisteredProducts = ({ products }: RegisteredProductsProps) => {
  return (
    <Flex flexDir="column" rowGap="40px">
      <Flex px="16px" flexDir="column" rowGap="32px">
        <SummarySection title="최근 등록 상품" href="/my/seller/registered-products" empty={products.length === 0}>
          <ListLayout>
            {products.map((product) => (
              <Product product={product} />
            ))}
          </ListLayout>
        </SummarySection>
        <Flex columnGap="14px">
          <Button variant="black">상품 관리</Button>
          <Button variant="gray">상품 등록</Button>
        </Flex>
      </Flex>
      <HorizontalLine />
    </Flex>
  );
};
