export type UserType = "USER_BUYER" | "USER_SELLER";

export interface ChoiceUserTypeProps {
  userChoice: UserType;
  setUserChoice: (user: UserType) => void;
}
