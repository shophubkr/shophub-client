"use client";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useShophubTheme } from "@shophub/theme";
import type { PropsWithChildren } from "react";
import type { ButtonProps } from "./Button.types";

export const Button = ({ children, as = "button", ...htmlButtonAttributes }: PropsWithChildren<ButtonProps>) => {
  const theme = useShophubTheme();
  const Element = as;

  const buttonStyles = css({
    backgroundColor: theme.colors.primary.p400,
    color: theme.colors.primary.p600,
  });

  return (
    <Element css={buttonStyles} {...htmlButtonAttributes}>
      {children}
    </Element>
  );
};
