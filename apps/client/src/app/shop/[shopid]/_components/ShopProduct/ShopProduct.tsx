import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";

import { Icon, ImageBox } from "~/components";

import type { ShopProductProps } from "./ShopProduct.types";

export const ShopProduct = ({ id, imageUrl, topCategory, introduce, price }: ShopProductProps) => {
  return (
    <Link href="/shop/product/productid" style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: "8px", right: "8px" }}>
        <Icon name="sell" size={16} />
      </div>
      <ImageBox
        src="https://picsum.photos/200"
        alt="ProductImage"
        boxSize="172px"
        borderRadius="8px"
        imgOptions={{ priority: true }}
      />
      <Flex align="baseline" columnGap="4px" mt="24px">
        <Text fontSize="16px" fontWeight="700">
          상품이름
        </Text>
        <Text fontSize="12px" fontWeight="500">
          상품카테고리
        </Text>
      </Flex>
      <Text mt="8px" mb="16px" fontSize="14px" fontWeight="300">
        상품설명
      </Text>
      <Text fontSize="14px" fontWeight="500">
        상품가격
      </Text>
    </Link>
  );
};
