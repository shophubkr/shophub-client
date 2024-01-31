import Link from "next/link";
import { Button, Flex } from "@chakra-ui/react";
import { useParams } from "next/navigation";

import { Icon } from "~/components";
import { useGetNearestExpiryCoupon } from "../../_hooks";

export const CouponSection = () => {
  const params = useParams();
  const couponInfo = useGetNearestExpiryCoupon();

  return (
    <div>
      {couponInfo && (
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
            쿠폰 만료 {couponInfo.dday}일 남았어요
          </Flex>
          <Link href={`/shop/${params.shopId}/coupons`}>
            <Button
              display="flex"
              w="full"
              alignItems="center"
              justifyContent="space-between"
              p="8px 16px"
              fontSize="16px"
              fontWeight="500"
            >
              {couponInfo.content}
              <Icon name="expand_more" />
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};
