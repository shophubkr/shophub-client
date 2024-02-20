"use client";

import { Container } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import React from "react";

const SellerCouponLayout = ({ children }: PropsWithChildren) => {
  return <Container px="16px">{children}</Container>;
};

export default SellerCouponLayout;
