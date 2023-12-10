"use client";

import { Box } from "@chakra-ui/react";
import type { HorizontalLineProps } from "./HorizontalLine.types";

export const HorizontalLine = ({ color = "#C9C9C9", h = "3px", ...prop }: HorizontalLineProps) => {
  return <Box w="full" bgColor={color} h={h} {...prop} />;
};
