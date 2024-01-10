import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";

import * as Styled from "./ShopProductSection.styles";

import { ProductImage } from "../ProductImage";

export const ShopProductSection = () => {
  const theme = useShophubTheme();

  return (
    <>
      <Flex mt="32px">브랜드 상품</Flex>
      <Styled.Container>
        <Link href="/detail/product/id">
          <ProductImage size="md" src="https://picsum.photos/200" alt="Product Image" />
          <Flex align="baseline" gap="4px" mt="24px">
            <Styled.Name theme={theme}>상품이름</Styled.Name>
            <Styled.Category theme={theme}>상품카테고리</Styled.Category>
          </Flex>
          <Styled.Description theme={theme}>상품설명</Styled.Description>
          <Styled.Price theme={theme}>상품가격</Styled.Price>
        </Link>
      </Styled.Container>
    </>
  );
};
