import type { LinkProps } from "next/link";

export interface BackButtonProps {
  href: LinkProps["href"];
  size?: number;
}
