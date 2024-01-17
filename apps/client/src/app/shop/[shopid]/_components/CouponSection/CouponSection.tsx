import Link from "next/link";
import { Button, Flex } from "@chakra-ui/react";

import { Icon } from "~/components";

export const CouponSection = () => {
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
        쿠폰 만료 3일 남았어요
      </Flex>
      <Link href="/shop/shopid/coupon">
        <Button
          display="flex"
          w="full"
          alignItems="center"
          justifyContent="space-between"
          p="8px 16px"
          fontSize="16px"
          fontWeight="500"
        >
          최대 10,000원 초대박 할인
          <Icon name="expand_more" size={16} />
        </Button>
      </Link>
    </>
  );
};
