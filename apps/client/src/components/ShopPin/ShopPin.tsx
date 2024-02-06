import { Flex, Text } from "@chakra-ui/react";
import type { ShopPinProps } from "./ShopPin.type";

export const ShopPin = ({ name, checkCoupon }: ShopPinProps) => {
  return (
    <Flex p="4px 8px" columnGap="4px" bgColor="white" borderRadius="4px" alignItems="center">
      <Text className="material-icons-outlined">{checkCoupon ? "discount" : "label_off"}</Text>
      <Text fontSize="14px">{name}</Text>
    </Flex>
  );
};
