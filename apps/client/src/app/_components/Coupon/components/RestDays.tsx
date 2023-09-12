"use client";

import { Flex, Text } from "@chakra-ui/react";
import type { RestDayProps } from "./CouponComponents.types";

export const RestDay = ({ restDay, align }: RestDayProps) => {
  const restDayText = restDay > 0 ? `쿠폰 만료 ${restDay}일 남았어요` : "쿠폰이 종료되었어요";
  return (
    <Flex
      bgColor={restDay > 0 ? "#000" : "#C9C9C9"}
      w="full"
      h="22px"
      borderRadius="4px"
      alignItems="center"
      justifyContent={align === "center" ? "center" : `flex-${align}`}
      gap="5.75px"
      color={restDay > 0 ? "#FFF" : "#AAA"}
      pl="9.75px"
    >
      <span className="material-icons-outlined" style={{ fontSize: "14px" }}>
        calendar_month
      </span>
      <Text fontSize="14px">{restDayText}</Text>
    </Flex>
  );
};
