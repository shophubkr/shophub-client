import Link from "next/link";
import { Box, Button, Flex, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import { Icon } from "~/components";
import { couponApi } from "../../_states/server";

import type { CouponSectionProps } from "../../_types";

export const CouponSection = ({ shopId }: CouponSectionProps) => {
  const { isLoading, data, isError } = useQuery(["couponInfo", shopId], () => couponApi.getNearestExpiryCoupon(shopId));

  if (isLoading)
    return (
      <Box mt="8px">
        <Spinner position="absolute" left="50%" transform="translateX(-50%)" />
      </Box>
    );
  if (isError) return null;

  return (
    <>
      <Flex
        bgColor="black"
        color="white"
        borderRadius="4px"
        alignItems="center"
        m="24px 0 16px 0"
        p="4px 8px"
        columnGap="4px"
        fontSize="14px"
        fontWeight="400"
      >
        <Icon name="calendar_month" size={14} />
        쿠폰 만료 {data.dday}일 남았어요
      </Flex>
      <Link href={`/shop/${shopId}/coupons`}>
        <Button
          display="flex"
          w="full"
          alignItems="center"
          justifyContent="space-between"
          p="8px 16px"
          fontSize="16px"
          fontWeight="500"
        >
          {data.content}
          <Icon name="expand_more" />
        </Button>
      </Link>
    </>
  );
};
