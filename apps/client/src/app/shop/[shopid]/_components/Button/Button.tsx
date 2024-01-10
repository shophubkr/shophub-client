import { useShophubTheme } from "@shophub/theme";

import * as Styled from "./Button.styles";

import { Icon } from "../Icon";

import type { ButtonProps } from "./Button.types";

export const Button = ({ size, label }: ButtonProps) => {
  const theme = useShophubTheme();

  switch (size) {
    case "tiny":
      return (
        <Styled.TinyButton type="button" label={label} theme={theme}>
          <Icon label={label} fontSize="14px" color={theme.COLORS.black} />
          {label === "share" ? "공유" : "팔로우"}
        </Styled.TinyButton>
      );

    case "large":
      return (
        <Styled.LargeButton type="button" label={label} theme={theme}>
          <Icon label={label} fontSize="16px" color={label === "findWay" ? theme.COLORS.white : theme.COLORS.black} />
          {label === "findWay" ? "길찾기" : "지도보기"}
        </Styled.LargeButton>
      );

    default:
      return undefined;
  }
};
