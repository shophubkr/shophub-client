"use client";

import { Flex, Text } from "@chakra-ui/react";
import type { CouponStateProps } from "./CouponComponents.types";

export const CouponState = ({ isExpired }: CouponStateProps) => {
  const iconAndTitle = !isExpired ? { title: "진행", icon: "play_circle" } : { title: "종료", icon: "stop_circle" };
  return (
    <Flex
      bgColor="#000"
      color="#fff"
      alignItems="center"
      justifyContent="center"
      gap="4px"
      w="60px"
      h="22px"
      borderRadius="4px"
    >
      <span className="material-icons-outlined" style={{ fontSize: "14px" }}>
        {iconAndTitle.icon}
      </span>
      <Text fontSize="14px">{iconAndTitle.title}</Text>
    </Flex>
  );
};
