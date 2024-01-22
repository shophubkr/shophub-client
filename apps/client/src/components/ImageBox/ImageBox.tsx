import Image from "next/image";
import { Box } from "@chakra-ui/react";

import type { ImageBoxProps } from "./ImageBox.types";

export const ImageBox = ({ src, alt, imgOptions, ...boxStyleProps }: ImageBoxProps) => {
  return (
    <Box position="relative" overflow="hidden" {...boxStyleProps}>
      <Image src={src} alt={alt} fill sizes="100%" {...imgOptions} />
    </Box>
  );
};
