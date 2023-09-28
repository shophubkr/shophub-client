import { Box, Text } from "@chakra-ui/react";
import type { ProductType } from "~/mocks/Apis/product/productApi";
import * as S from "./StorePinOnMap.style";

export const StorePinOnMap = ({ store }: { store: ProductType }) => {
  const { storeName, isCouponAvailable, isRecommend } = store;
  return (
    <S.StyledCenter
      padding="4px 8px"
      columnGap="4px"
      bgColor={isRecommend ? "#E5EFAD" : "black"}
      color={isRecommend ? "black" : "white"}
      border={isRecommend ? "1px solid " : "none"}
      borderRadius="4px"
    >
      <Box className="material-icons-outlined">{isCouponAvailable ? "discount" : "label_off"}</Box>
      <Text fontSize="14px">{storeName}</Text>
    </S.StyledCenter>
  );
};
