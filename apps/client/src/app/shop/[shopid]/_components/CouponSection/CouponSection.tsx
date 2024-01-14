import Link from "next/link";
import { Button, Flex } from "@chakra-ui/react";

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
        <span className="material-icons-outlined" style={{ fontSize: "14px" }}>
          calendar_month
        </span>
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
          <span className="material-icons-outlined" style={{ fontSize: "16px" }}>
            expand_more
          </span>
        </Button>
      </Link>
    </>
  );
};
