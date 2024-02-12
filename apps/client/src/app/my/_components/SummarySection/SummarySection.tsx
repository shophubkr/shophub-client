"use client";

import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { type PropsWithChildren } from "react";
import { useShophubTheme } from "@shophub/theme";
import type { SummarySectionProps } from "./SummarySection.types";

export const SummarySection = ({ title, href, empty = false, children }: PropsWithChildren<SummarySectionProps>) => {
  const theme = useShophubTheme();

  return (
    <Box>
      <Flex alignItems="center" justifyContent="space-between" mb="24px">
        <Text fontWeight="700">{title}</Text>
        <Text fontSize="14px">
          <Link href={href}>더보기</Link>
        </Text>
      </Flex>
      {!empty ? (
        <section>{children}</section>
      ) : (
        <Center w="full" h="100px" boxShadow="xs" borderRadius="8px">
          <Text textAlign="center" color={theme.COLORS.grey[700]} fontSize="14px">
            {title}이 없습니다.
          </Text>
        </Center>
      )}
    </Box>
  );
};
