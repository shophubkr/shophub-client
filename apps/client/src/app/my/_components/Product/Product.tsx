"use client";

import { Flex } from "@chakra-ui/react";
import { Button } from "@shophub/ui";
import type { ProductProps } from "./Product.types";
import { ProductItem } from "~/components";

export const Product = ({ product, edit = false }: ProductProps) => {
  // TODO: 상품 관련 api 연동
  const handleSoldOut = () => {};
  const handleEdit = () => {};
  const handleDelete = () => {};

  return (
    <Flex flexDir="column" rowGap="16px">
      <ProductItem {...product} />
      {edit && (
        <Flex>
          <Button onClick={handleSoldOut}>품절</Button>
          <Button onClick={handleEdit}>수정</Button>
          <Button onClick={handleDelete}>삭제</Button>
        </Flex>
      )}
    </Flex>
  );
};
