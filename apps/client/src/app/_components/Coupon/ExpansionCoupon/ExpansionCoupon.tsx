import { Flex, Text } from "@chakra-ui/react";
import type { ExpansionCouponProps } from "./ExpansionCoupon.types";

export const ExpansionCoupon = ({ title }: ExpansionCouponProps) => {
  return (
    <Flex w="full" h="full" bgColor="rgba(0, 0, 0, 0.5)" alignItems="center" justifyContent="center">
      <Flex w="358px" h="724px" alignItems="center" justifyContent="center" borderRadius="8px" bgColor="#EEEEEE">
        <Text fontWeight="700" fontSize="48px" transform="rotate(-90deg)">
          {title}
        </Text>
      </Flex>
    </Flex>
  );
};
