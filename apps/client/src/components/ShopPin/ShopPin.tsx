import { Flex, Text } from "@chakra-ui/react";
import { Icon } from "../Icon";
import type { ShopPinProps } from "./ShopPin.type";

export const ShopPin = ({ name, checkCoupon }: ShopPinProps) => {
  return (
    <Flex p="4px 8px" columnGap="4px" bgColor="white" borderRadius="4px" alignItems="center">
      <Icon name={checkCoupon ? "discount" : "label_off"} size={12} />
      <Text fontSize="14px">{name}</Text>
    </Flex>
  );
};
