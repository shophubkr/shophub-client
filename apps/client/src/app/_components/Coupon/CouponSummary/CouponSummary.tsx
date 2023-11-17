"use client";

import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { CouponSummaryInformation } from "./CouponSummary.constants";
import type { CouponSummaryKeys, CouponSummaryProps } from "./CouponSummary.types";

export const CouponSummary = ({ couponSummary }: CouponSummaryProps) => {
  const couponSummaryKeys = Object.keys(couponSummary) as unknown as CouponSummaryKeys[];
  return (
    <Grid templateColumns={`repeat(${couponSummaryKeys.length}, 1fr)`} borderRadius="4px" bgColor="#EEEEEE" p="14px 0">
      {couponSummaryKeys.map((key) => (
        <GridItem key={CouponSummaryInformation[key].title}>
          <Box textAlign="center">
            <Text fontSize="12px" mb="8px">
              {CouponSummaryInformation[key].title}
            </Text>
            <Text fontWeight="500" color={CouponSummaryInformation[key].countTextColor}>
              {couponSummary[key]}
            </Text>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};
