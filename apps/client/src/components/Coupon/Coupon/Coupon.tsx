"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { CouponBody, Validity } from "../components";
import CouponState from "../components/CouponState";
import { Dday } from "../components/Dday";
import type { CouponProps } from "./Coupon.types";

export const Coupon = ({ shopName, couponType, couponContent, dday, startedAt, expiredAt }: CouponProps) => {
  const isExpired = dday <= 0;
  return (
    <Box w="full" h="191px">
      {couponType === "buyer" && (
        <Box>
          <Flex w="full" alignItems="center" justifyContent="space-between" mb="13px">
            <Flex>
              <Text>매장 : &nbsp;</Text>
              <Text fontWeight="700">{shopName}</Text>
            </Flex>
            <Dday dday={dday} />
          </Flex>
          <CouponBody title={couponContent} isExpired={isExpired} />
          <Box mt="16px">
            <Validity start={startedAt} end={expiredAt} />
          </Box>
        </Box>
      )}
      {couponType === "seller" && (
        <Box>
          <Flex alignItems="center" justifyContent="space-between" mb="13px">
            <Validity start={startedAt} end={expiredAt} />
            <CouponState isExpired={isExpired} />
          </Flex>
          <CouponBody title={couponContent} isExpired={isExpired} />
          <Box mt="8px">
            <Dday dday={dday} />
          </Box>
        </Box>
      )}
    </Box>
  );
};
