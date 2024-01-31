import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";

import { Icon, ImageBox } from "~/components";

import type { ProductInfo } from "../../_types";

export const ShopProduct = (productInfo: ProductInfo) => {
  const { id, name, topCategory, introduce, price } = productInfo;

  return (
    <Link href={`/shop/${id}/products`} style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: "8px", right: "8px" }}>
        <Icon name="sell" />
      </div>
      <ImageBox
        src="https://picsum.photos/200"
        alt="ProductImage"
        boxSize="172px"
        borderRadius="8px"
        imgOptions={{ priority: true }}
      />
      <Flex align="baseline" columnGap="4px" mt="24px">
        <Text fontSize="16px" fontWeight="700" w="auto" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
          {name}
        </Text>
        <Text fontSize="12px" fontWeight="500" w="full">
          {topCategory}
        </Text>
      </Flex>
      <Text
        mt="8px"
        mb="16px"
        fontSize="14px"
        fontWeight="300"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      >
        {introduce}
      </Text>
      <Text fontSize="14px" fontWeight="500">
        {price}원 ~
      </Text>
    </Link>
  );
};
