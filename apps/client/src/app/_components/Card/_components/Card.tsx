import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import type { ProductType } from "~/mocks/Apis/product/productApi";
import * as S from "./Card.style";

export const Card = ({ store }: { store: ProductType }) => {
  const { storeIdx, storeName, isCouponAvailable, thumbnailUrl, description, distance } = store;

  return (
    <Link href={{ pathname: `/product/${storeIdx}` }} style={{ width: "100%" }}>
      <Flex width="100%" padding="24px 16px" columnGap="16px">
        <Box
          w="72px"
          h="72px"
          flexShrink="0"
          background={`url(${thumbnailUrl}) no-repeat center center`}
          bgSize="cover"
          borderRadius="4px"
        />
        <Container padding=" 0" columnGap="12px">
          <Flex w="100%" justifyContent="space-between" alignItems="flex-start">
            <Flex flexDir="column" rowGap="4px">
              <Text as="h6" fontSize="16px" fontWeight="bold">
                {storeName}
              </Text>
              <Text fontSize="14px">{description}</Text>
            </Flex>
            <S.StyledFlex columnGap="4px" alignItems="center">
              <Box className="material-icons-outlined">{isCouponAvailable ? "discount" : "label_off"}</Box>
              <Text fontSize="14px">{isCouponAvailable ? "쿠폰 사용가능" : "쿠폰 사용불가"}</Text>
            </S.StyledFlex>
          </Flex>
          <Text fontSize="14px">{distance}m | 도보, 2분</Text>
        </Container>
      </Flex>
    </Link>
  );
};
