import type { IconProps } from "./Icon.types";

export const Icon = ({ name, size = 16, color }: IconProps) => {
  return (
    <span className="material-icons-outlined" style={{ fontSize: `${size}px`, color: `${color}` }}>
      {name}
    </span>
  );
};
