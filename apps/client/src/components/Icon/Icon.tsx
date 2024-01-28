import type { IconProps } from "./Icon.types";

export const Icon = ({ name, size, color }: IconProps) => {
  return (
    <span className="material-icons-outlined" style={{ fontSize: `${size ?? 16}px`, color: `${color}` }}>
      {name}
    </span>
  );
};
