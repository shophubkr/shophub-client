"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import type { SummarySectionProps } from "./SummarySection.types";

export const SummarySection = ({ title, href, children }: PropsWithChildren<SummarySectionProps>) => {
  return (
    <Box p="40px 16px">
      <Flex alignItems="center" justifyContent="space-between" mb="24px">
        <Text fontWeight="700">{title}</Text>
        <Text fontSize="14px">
          <Link href={href}>더보기</Link>
        </Text>
      </Flex>
      <section>{children}</section>
    </Box>
  );
};
