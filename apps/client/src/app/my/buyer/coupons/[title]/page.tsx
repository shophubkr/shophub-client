"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { useShophubTheme } from "@shophub/theme";

const CouponDetailPage = ({ params: { title } }: { params: { title: string } }) => {
  const theme = useShophubTheme();

  return (
    <Box w="full" h="100vh" bgColor={theme.COLORS.grey[500]} p="16px">
      <Flex
        w="full"
        h="full"
        borderRadius="8px"
        bgColor={theme.COLORS.grey[300]}
        alignItems="center"
        justifyContent="center"
      >
        <Text transform="rotate(-90deg)" fontSize="48px" fontWeight="700" color={theme.COLORS.black}>
          {decodeURIComponent(title)}
        </Text>
      </Flex>
    </Box>
  );
};

export default CouponDetailPage;
