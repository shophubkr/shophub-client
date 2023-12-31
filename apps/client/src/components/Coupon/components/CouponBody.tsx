"use client";

import { Flex, Text } from "@chakra-ui/react";
import type { CouponBodyProps } from "./CouponComponents.types";

export const CouponBody = ({ title, isExpired }: CouponBodyProps) => {
  return (
    <Flex w="full" h="101px" alignItems="center" justifyContent="center" bgColor="#EEEEEE" borderRadius="8px">
      <Text fontSize="24px" fontWeight="700" color={!isExpired ? "#000" : "#AAAAAA"}>
        {title}
      </Text>
    </Flex>
  );
};
