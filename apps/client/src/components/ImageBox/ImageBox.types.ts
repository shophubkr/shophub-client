import type { ImageProps } from "next/image";

export interface ItemImageProps extends ImageProps {
  w: string;
  h: string;
  borderRadius?: string;
}
