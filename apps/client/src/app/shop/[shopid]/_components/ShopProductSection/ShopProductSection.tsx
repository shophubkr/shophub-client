import Link from "next/link";
import { Flex, Grid, Image, Text } from "@chakra-ui/react";

export const ShopProductSection = () => {
  return (
    <>
      <Flex mt="32px">브랜드 상품</Flex>
      <Grid gridTemplateColumns="172px 172px" gap="24px 12px" mt="16px">
        <Link href="/shop/product/productid" style={{ position: "relative" }}>
          <span
            className="material-icons-outlined"
            style={{ fontSize: "16px", position: "absolute", top: "8px", right: "8px" }}
          >
            sell
          </span>
          <Image src="https://picsum.photos/200" alt="Product Image" borderRadius="8px" w="172px" h="172px" />
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
      </Grid>
    </>
  );
};
