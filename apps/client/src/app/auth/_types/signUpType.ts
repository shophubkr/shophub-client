export type SingUpFormValues = {
  email?: string;
  password?: string;
  passwordConfirm?: string;
  userType?: "buyer" | "seller";
  nickname?: string;
  phoneNumber?: string;
  isAgeOverAgree?: boolean;
  isSendAdsAgree?: boolean;
};
