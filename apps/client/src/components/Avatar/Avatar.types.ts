import type { ChangeEventHandler } from "react";

export interface AvatarProps {
  size?: number;
  edit?: boolean;
  src?: string;
  onClick?: VoidFunction;
  onChange?: ChangeEventHandler;
}
