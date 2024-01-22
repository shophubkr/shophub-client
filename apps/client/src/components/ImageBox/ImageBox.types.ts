import type { BoxProps } from "@chakra-ui/react";
import type { ImageProps } from "next/image";

type ImgOptionsProps = Omit<ImageProps, "src" | "alt">;

export interface ImageBoxProps extends BoxProps {
  src: ImageProps["src"];
  alt: ImageProps["alt"];
  boxStyleProps?: BoxProps;
  imgOptions?: ImgOptionsProps;
}
