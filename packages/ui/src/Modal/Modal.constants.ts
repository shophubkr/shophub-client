import { colors } from "@shophub/theme/src/token";

export const typeToIcon = {
  positive: {
    color: colors.status.success,
    icon: "check_circle",
  },
  negative: {
    color: colors.status.error,
    icon: "error",
  },
  warning: {
    color: colors.primary.p500,
    icon: "help",
  },
} as const;
