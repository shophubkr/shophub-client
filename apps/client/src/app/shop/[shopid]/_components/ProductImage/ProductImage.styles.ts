import styled from "@emotion/styled";
import { css } from "@emotion/react";

import type { ImageSizeType } from "./ProductImage.types";

const SIZE_SMALL = css`
  width: 72px;
  height: 72px;
`;
const SIZE_MEDIUM = css`
  width: 172px;
  height: 172px;
`;
const SIZE_LARGE = css`
  width: 358px;
  height: 358px;
`;

export const ImageWrapper = styled.div<{ size: ImageSizeType }>`
  position: relative;
  ${(props) => props.size === "sm" && SIZE_SMALL}
  ${(props) => props.size === "md" && SIZE_MEDIUM}
  ${(props) => props.size === "lg" && SIZE_LARGE}
  border-radius: 8px;
  & > img {
    border-radius: 8px;
  }
`;
