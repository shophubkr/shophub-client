import { Flex, Text } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";
import type { ExpansionCouponProps } from "./ExpansionCoupon.types";

export const ExpansionCoupon = ({ title }: ExpansionCouponProps) => {
  const theme = useShophubTheme();

  return (
    <Flex w="390px" h="100vh" bgColor="rgba(0, 0, 0, 0.5)" alignItems="center" justifyContent="center" p="16px">
      <Flex
        w="full"
        h="full"
        alignItems="center"
        justifyContent="center"
        borderRadius="8px"
        bgColor={theme.COLORS.grey[300]}
      >
        <Text fontWeight="700" fontSize="48px" transform="rotate(-90deg)">
          {title}
        </Text>
      </Flex>
    </Flex>
  );
};
