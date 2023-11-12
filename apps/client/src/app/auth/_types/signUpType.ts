export type SingUpFormValues = {
  email?: string;
  password?: string;
  passwordConfirm?: string;
  userType?: "buyer" | "seller";
  nickName?: string;
  tel?: string;
  businessNum?: string;
  isBusinessNumState?: boolean;
  isAgeOverAgree?: boolean;
  isSendAdsAgree?: boolean;
};

export interface SignUpBusinessNumber {
  tax_type: string;
}

export interface SignUpApiResponse<T> {
  data: T[];
}
