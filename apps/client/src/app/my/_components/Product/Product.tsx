"use client";

import { Flex, Box, Text } from "@chakra-ui/react";
import { Button } from "@shophub/ui";
import type { ProductProps } from "./Product.types";
import { ImageBox } from "~/components";

export const Product = ({ product: { id, imageUrl, name, introduce, date, price }, edit = false }: ProductProps) => {
  // TODO: 상품 관련 api 연동
  const handleSoldOut = () => {};
  const handleEdit = () => {};
  const handleDelete = () => {};

  return (
    <Flex flexDir="column" rowGap="16px">
      <Flex columnGap="14px" alignItems="center">
        <ImageBox src={imageUrl} alt={`${name} 상품 이미지`} boxSize="96px" />
        <Box w="full">
          <Flex flexDir="column" rowGap="28px">
            <Flex flexDir="column" rowGap="8px">
              <Text fontWeight={700}>{name}</Text>
              <Text fontSize="14px" fontWeight={300}>
                {introduce}
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text fontSize="14px" fontWeight={300}>
                {date}
              </Text>
              <Text fontSize="14px" fontWeight={500}>
                {price.toLocaleString()}원
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
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
