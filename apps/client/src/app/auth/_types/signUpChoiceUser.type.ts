import type { ShophubThemeProps } from "@shophub/theme";

export type UserType = "USER_BUYER" | "USER_SELLER";

export interface ChoiceUserTypeProps {
  userChoice: UserType;
  setUserChoice: (user: UserType) => void;
  theme: ShophubThemeProps;
}
