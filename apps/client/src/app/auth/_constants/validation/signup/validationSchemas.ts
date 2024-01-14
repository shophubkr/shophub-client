import * as yup from "yup";
import { SIGN_UP_ERROR_MESSAGES } from "./validationMsg";
import { SIGN_UP_FORM_VALIDATION_REGEX } from "./validationRegex";

const SIGN_UP_COMMON_SCHEMA = {
  email: yup.string().required(SIGN_UP_ERROR_MESSAGES.email.required).email(SIGN_UP_ERROR_MESSAGES.email.pattern),
  password: yup
    .string()
    .min(8, SIGN_UP_ERROR_MESSAGES.password.min)
    .max(20, SIGN_UP_ERROR_MESSAGES.password.max)
    .matches(SIGN_UP_FORM_VALIDATION_REGEX.password, SIGN_UP_ERROR_MESSAGES.password.pattern)
    .required(SIGN_UP_ERROR_MESSAGES.password.required),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], SIGN_UP_ERROR_MESSAGES.passwordConfirm.noSame)
    .required(SIGN_UP_ERROR_MESSAGES.passwordConfirm.required),
  nickname: yup
    .string()
    .min(2, SIGN_UP_ERROR_MESSAGES.nickname.min)
    .matches(SIGN_UP_FORM_VALIDATION_REGEX.nickname, SIGN_UP_ERROR_MESSAGES.nickname.pattern)
    .required(SIGN_UP_ERROR_MESSAGES.nickname.required),
  isAgeOverAgree: yup.boolean().oneOf([true], "필수값"),
  isSendAdsAgree: yup.boolean(),
};

export const SIGN_UP_BUYER_SCHEMA = yup.object({
  ...SIGN_UP_COMMON_SCHEMA,
});

export const SIGN_UP_SELLER_SCHEMA = yup.object({
  ...SIGN_UP_COMMON_SCHEMA,
  phoneNumber: yup
    .string()
    .required(SIGN_UP_ERROR_MESSAGES.phoneNumber.required)
    .matches(SIGN_UP_FORM_VALIDATION_REGEX.phoneNumber, SIGN_UP_ERROR_MESSAGES.phoneNumber.pattern),
});
