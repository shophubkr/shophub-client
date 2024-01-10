import type { ImageProps } from "next/image";

export type ImageSizeType = "sm" | "md" | "lg";

export interface ItemImageProps extends ImageProps {
  size: ImageSizeType;
}
