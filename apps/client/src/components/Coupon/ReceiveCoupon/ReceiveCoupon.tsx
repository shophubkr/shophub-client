import { Flex, Text } from "@chakra-ui/react";
import { Validity } from "../components";
import { RestDay } from "../components/Dday";
import type { ReceiveCouponProps } from "./ReceiveCoupon.types";

export const ReceiveCoupon = ({ restDay, title, validity }: ReceiveCouponProps) => {
  const onClickReceiveCoupon = () => {
    /** 쿠폰 받기 요청 로직 */
  };

  return (
    <Flex align="center" justifyContent="center" flexDir="column">
      <RestDay restDay={restDay} align="start" />
      <Flex
        alignItems="center"
        justifyContent="center"
        w="full"
        h="48px"
        gap="10px"
        bgColor="#EEEEEE"
        borderRadius="8px"
        m="8px 0"
        cursor="pointer"
        onClick={onClickReceiveCoupon}
      >
        <span className="material-icons-outlined" style={{ fontSize: "16px" }}>
          discount
        </span>
        <Text fontWeight="500">{title} 쿠폰 받기</Text>
      </Flex>
      <Validity start={validity.start} end={validity.end} />
    </Flex>
  );
};
