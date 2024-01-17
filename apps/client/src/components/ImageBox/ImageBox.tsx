import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";

import type { ItemImageProps } from "./ImageBox.types";

export const ImageBox = ({ src, alt, w, h, borderRadius, ...props }: ItemImageProps) => {
  const BOX_STYLES = css`
    position: relative;
    border-radius: ${borderRadius};
    > img {
      border-radius: ${borderRadius};
    }
  `;

  return (
    <Box w={w} h={h} css={BOX_STYLES}>
      <Image src={src} alt={alt} fill sizes="100%" {...props} />
    </Box>
  );
};
