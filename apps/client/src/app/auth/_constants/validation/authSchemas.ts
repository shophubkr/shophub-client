import * as yup from "yup";
import { email, isAgeOverAgree, isSendAdsAgree, password, passwordConfirm, phoneNumber } from "~/app/shared/validation";

export const SIGN_UP_COMMON_SCHEMA = {
  email,
  password,
  passwordConfirm,
  isAgeOverAgree,
  isSendAdsAgree,
};

export const SIGN_UP_BUYER_SCHEMA = yup.object({
  ...SIGN_UP_COMMON_SCHEMA,
});

export const SIGN_UP_SELLER_SCHEMA = yup.object({
  ...SIGN_UP_COMMON_SCHEMA,
  phoneNumber,
});

export const LOGIN_SCHEMA = yup.object({
  email,
  password,
});
