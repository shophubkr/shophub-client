"use client";

import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { CouponState, CouponBody, ExpirationDuring, Dday } from "../components";
import type { CouponProps } from "./Coupon.types";

export const Coupon = ({ shopName, couponType, content, isFinished, dday, startedAt, expiredAt }: CouponProps) => {
  return (
    <Box w="full">
      {couponType === "buyer" && (
        <Box>
          <Flex w="full" alignItems="center" justifyContent="space-between" mb="13px">
            <Flex>
              <Text>매장 : &nbsp;</Text>
              <Text fontWeight="700">{shopName}</Text>
            </Flex>
            <Dday dday={dday} />
          </Flex>
          <Link href={`/my/buyer/coupons/${content}`} style={{ textDecoration: "none" }}>
            <CouponBody title={content} isExpired={isFinished} />
          </Link>
          <Box mt="16px">
            <ExpirationDuring start={startedAt} end={expiredAt} />
          </Box>
        </Box>
      )}
      {couponType === "seller" && (
        <Box>
          <Flex alignItems="center" justifyContent="space-between" mb="13px">
            <ExpirationDuring start={startedAt} end={expiredAt} />
            <CouponState isExpired={isFinished} />
          </Flex>
          <CouponBody title={content} isExpired={isFinished} />
          <Box mt="8px">
            <Dday dday={dday} align="center" />
          </Box>
        </Box>
      )}
    </Box>
  );
};
