"use client";

import { Text } from "@chakra-ui/react";
import type { ExpirationDuringProps } from "./CouponComponents.types";

/**
 *
 * @param start 'YYYY-MM-DD'
 * @param end 'YYYY-MM-DD'
 */
export const ExpirationDuring = ({ start, end }: ExpirationDuringProps) => {
  const modifiedStart = start.split("-").join(".");
  const modifiedEnd = end.split("-").join(".");
  return (
    <Text fontSize="14px" color="#AAAAAA">
      유효기간: {modifiedStart} ~ {modifiedEnd}
    </Text>
  );
};
