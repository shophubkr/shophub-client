"use client";

import { Flex, Text } from "@chakra-ui/react";
import type { RestDayProps } from "./CouponComponents.types";

export const Dday = ({ dday, align }: RestDayProps) => {
  const restDayText = dday > 0 ? `쿠폰 만료 ${dday}일 남았어요` : "쿠폰이 만료되었어요";
  return (
    <Flex
      bgColor={dday > 0 ? "#000" : "#C9C9C9"}
      w="fit"
      borderRadius="4px"
      alignItems="center"
      justifyContent={align === "center" ? "center" : `flex-${align}`}
      gap="5.75px"
      color={dday > 0 ? "#FFF" : "#AAA"}
      px="8px"
    >
      <span className="material-icons-outlined" style={{ fontSize: "14px" }}>
        calendar_month
      </span>
      <Text fontSize="14px">{restDayText}</Text>
    </Flex>
  );
};
