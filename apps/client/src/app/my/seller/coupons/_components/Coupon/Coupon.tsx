import { Flex } from "@chakra-ui/react";
import { Button } from "@shophub/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Coupon as BaseCoupon } from "~/components";
import type { CouponDataProps } from "~/components/Coupon/Coupon/Coupon.types";

export const Coupon = (props: CouponDataProps) => {
  const pathname = usePathname();
  const handleEarlyTerminate = () => {};

  return (
    <Flex flexDir="column" rowGap="24px">
      <BaseCoupon couponType="seller" {...props} />
      <Flex columnGap="14px">
        <Button variant="gray" size="small">
          <Link href={`${pathname}/detail/${props.id}`}>조회 / 수정</Link>
        </Button>
        <Button variant="gray" size="small" onClick={handleEarlyTerminate}>
          조기 종료
        </Button>
      </Flex>
    </Flex>
  );
};
