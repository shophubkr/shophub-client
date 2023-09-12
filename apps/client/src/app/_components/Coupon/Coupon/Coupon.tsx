"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { CouponBody, Validity } from "../components";
import CouponState from "../components/CouponState";
import { RestDay } from "../components/RestDays";
import type { CouponProps } from "./Coupon.types";

export const Coupon = ({ storeName, couponType, title, restDay, validity }: CouponProps) => {
  const isExpired = restDay <= 0;
  return (
    <Box w="358px" h="191px">
      {couponType === "buyer" && (
        <Box>
          <Flex w="full" alignItems="center" justifyContent="space-between" mb="13px">
            <Flex>
              <Text>매장 : &nbsp;</Text>
              <Text fontWeight="700">{storeName}</Text>
            </Flex>
            <Box w="168px">
              <RestDay restDay={restDay} />
            </Box>
          </Flex>
          <CouponBody title={title} isExpired={isExpired} />
          <Box mt="16px">
            <Validity start={validity.start} end={validity.end} />
          </Box>
        </Box>
      )}
      {couponType === "seller" && (
        <Box>
          <Flex alignItems="center" justifyContent="space-between" mb="13px">
            <Validity start={validity.start} end={validity.end} />
            <CouponState isExpired={isExpired} />
          </Flex>
          <CouponBody title={title} isExpired={isExpired} />
          <Box mt="8px">
            <RestDay restDay={restDay} />
          </Box>
        </Box>
      )}
    </Box>
  );
};
