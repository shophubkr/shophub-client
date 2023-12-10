import { COLORS } from "@shophub/theme/src/token";

export const typeToIcon = {
  positive: {
    color: COLORS.status.success,
    icon: "check_circle",
  },
  negative: {
    color: COLORS.status.error,
    icon: "error",
  },
  warning: {
    color: COLORS.primary[500],
    icon: "help",
  },
} as const;
