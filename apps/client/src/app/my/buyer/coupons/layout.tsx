"use client";

import { Container } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

const CouponListLayout = ({ children }: PropsWithChildren) => {
  return <Container px="16px">{children}</Container>;
};

export default CouponListLayout;
