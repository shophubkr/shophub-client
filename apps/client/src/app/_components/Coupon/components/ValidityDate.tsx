"use client";

import { Text } from "@chakra-ui/react";
import type { ValidityProps } from "./CouponComponents.types";

/**
 *
 * @param start 'YYYY-MM-DD'
 * @param end 'YYYY-MM-DD'
 */
export const Validity = ({ start, end }: ValidityProps) => {
  const modifiedStart = start.split("-").join(". ");
  const modifiedEnd = end.split("-").join(". ");
  return (
    <Text fontSize="14px" color="#AAAAAA">
      유효기간 : {modifiedStart} ~ {modifiedEnd}
    </Text>
  );
};
