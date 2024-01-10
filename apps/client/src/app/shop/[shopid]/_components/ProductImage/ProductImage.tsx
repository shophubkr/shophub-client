"use client";

import Image from "next/image";

import * as Styled from "./ProductImage.styles";

import type { ItemImageProps } from "./ProductImage.types";

export const ProductImage = ({ src, alt, size, ...props }: ItemImageProps) => {
  return (
    <Styled.ImageWrapper size={size}>
      <Image src={src} alt={alt} fill sizes="100%" {...props} />
    </Styled.ImageWrapper>
  );
};
