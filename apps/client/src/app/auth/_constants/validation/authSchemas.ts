import {
  email,
  isAgeOverAgree,
  isSendAdsAgree,
  nickname,
  password,
  passwordConfirm,
  phoneNumber,
} from "~/app/shared/validation";

export const SIGN_UP_BUYER_SCHEMA = {
  email,
  password,
  passwordConfirm,
  nickname,
  isAgeOverAgree,
  isSendAdsAgree,
};

export const SIGN_UP_SELLER_SCHEMA = {
  ...SIGN_UP_BUYER_SCHEMA,
  phoneNumber,
};

export const LOGIN_SCHEMA = {
  email,
  password,
};
