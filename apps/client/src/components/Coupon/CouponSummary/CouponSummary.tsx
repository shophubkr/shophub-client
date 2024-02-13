"use client";

import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { Children, type PropsWithChildren } from "react";
import { useShophubTheme } from "@shophub/theme";
import { VARIANT_TO_COLOR } from "./CouponSummary.constants";
import type { CouponSummaryItemProps } from "./CouponSummary.types";

export const CouponSummaryContainer = ({ children }: PropsWithChildren) => {
  const theme = useShophubTheme();
  const summaryItemsArray = Children.toArray(children);

  return (
    <Grid
      templateColumns={`repeat(${summaryItemsArray.length}, 1fr)`}
      borderRadius="4px"
      bgColor={theme.COLORS.grey[300]}
      py="14px"
    >
      {children}
    </Grid>
  );
};

export const CouponSummaryItem = ({ title, count, variant }: CouponSummaryItemProps) => {
  return (
    <GridItem>
      <Box textAlign="center">
        <Text fontSize="12px" mb="8px">
          {title}
        </Text>
        <Text fontWeight="500" color={VARIANT_TO_COLOR[variant]}>
          {count}
        </Text>
      </Box>
    </GridItem>
  );
};
