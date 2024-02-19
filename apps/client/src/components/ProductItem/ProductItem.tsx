import { Flex, Text } from "@chakra-ui/react";
import { ImageBox } from "../ImageBox";
import type { ProductItemProps } from "./ProductItem.types";

export const ProductItem = ({ imageUrl, name, introduce, date, price }: ProductItemProps) => {
  return (
    <Flex columnGap="14px">
      <ImageBox src={imageUrl} alt={`${name} 상품 이미지`} boxSize="96px" borderRadius="8px" />
      <Flex flexDir="column" rowGap="14px" py="8px" flexGrow={1}>
        <Flex flexDir="column">
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
    </Flex>
  );
};
