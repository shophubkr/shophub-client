import { LABEL_TO_ICON } from "./Icon.constants";

import type { IconProps } from "./Icon.types";

export const Icon = ({ label, fontSize, color }: IconProps) => {
  return (
    <span className="material-icons-outlined" style={{ fontSize, color }}>
      {LABEL_TO_ICON[label]}
    </span>
  );
};
