"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import type { StoreItemProps } from "./StoreItem.types";

export const StoreItem = (props: StoreItemProps) => {
  const { image, name, introduce, checkCoupon, address, minPrice } = props;
  const couponIcon = checkCoupon ? "discount" : "label_off";

  return (
    <Box w="359px" h="130px">
      <Flex gap="14px" alignItems="center" h="96px" mb="16px">
        <Box borderRadius="8px" overflow="hidden" w="96px" h="96px">
          <Image src={image} width="96" height="96" alt={`${name} store thumbnail`} />
        </Box>
        <Flex w="249px" h="80px" flexDir="column" justifyContent="center">
          <Flex align="flex-start" justifyContent="space-between" mb="28px">
            <Box height="38px">
              <Heading as="h6" fontSize="16px" mb="8px">
                {name}
              </Heading>
              <Text fontSize="14px">{introduce}</Text>
            </Box>
            <Flex gap="6px" alignItems="center">
              <span className="material-icons-outlined" style={{ fontSize: "16px" }}>
                {couponIcon}
              </span>
              <Text fontSize="14px">쿠폰</Text>
            </Flex>
          </Flex>
          <Text fontSize="14px" fontWeight="500" textAlign="end">
            최저 {minPrice.toLocaleString()}원
          </Text>
        </Flex>
      </Flex>
      <Flex gap="11.75px" alignItems="center">
        <span className="material-icons-outlined" style={{ fontSize: "18px" }}>
          location_on
        </span>
        <Text fontSize="14px" fontWeight="400">
          {address}
        </Text>
      </Flex>
    </Box>
  );
};
